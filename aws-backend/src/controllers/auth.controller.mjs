import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();

// Helper to hash password
const hashPassword = (password, salt) => {
  return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
};

// Pure Admin-Only Login (100% Guest Checkout Blueprint)
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Exclusively query the Admin table
    const adminUser = await prisma.admin.findUnique({ where: { email } });

    if (!adminUser) {
      return res.status(401).json({ error: 'Invalid admin credentials' });
    }

    const computedHash = hashPassword(password, adminUser.salt);
    if (computedHash !== adminUser.passwordHash) {
      return res.status(401).json({ error: 'Invalid admin credentials' });
    }

    // Generate legacy base64 payload to be fully compatible with the old React Dashboard
    const payload = { 
      userId: adminUser.id, 
      email: adminUser.email, 
      isAdmin: true, // Crucial for rbac.middleware
      exp: Date.now() + 86400000 // 24 hours
    };
    
    const token = Buffer.from(JSON.stringify(payload)).toString("base64url");

    res.status(200).json({ 
      message: 'Admin login successful', 
      token, 
      user: { name: adminUser.name, email: adminUser.email, isAdmin: true } 
    });
  } catch (err) {
    next(err);
  }
};

// Customer Registration
export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ error: 'All fields required' });

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return res.status(400).json({ error: 'Email already exists' });

    const salt = crypto.randomBytes(16).toString('hex');
    const passwordHash = hashPassword(password, salt);

    const user = await prisma.user.create({
      data: { name, email, passwordHash, salt }
    });

    const payload = { userId: user.id, email: user.email, exp: Date.now() + 86400000 };
    const token = Buffer.from(JSON.stringify(payload)).toString("base64url");

    res.status(201).json({ message: 'Registered successfully', token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (err) { next(err); }
};

// Customer Login
export const customerLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password are required' });

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const computedHash = hashPassword(password, user.salt);
    if (computedHash !== user.passwordHash) return res.status(401).json({ error: 'Invalid credentials' });

    const payload = { userId: user.id, email: user.email, exp: Date.now() + 86400000 };
    const token = Buffer.from(JSON.stringify(payload)).toString("base64url");

    res.status(200).json({ message: 'Login successful', token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (err) { next(err); }
};

// Get Me (Session Verify)
export const getMe = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user.userId }, select: { id: true, name: true, email: true } });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json({ user });
  } catch (err) { next(err); }
};

// Update Profile
export const updateProfile = async (req, res, next) => {
  try {
    const { name, email, currentPassword, newPassword } = req.body;
    const user = await prisma.user.findUnique({ where: { id: req.user.userId } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    let updateData = { name, email };

    if (currentPassword && newPassword) {
      const computedHash = hashPassword(currentPassword, user.salt);
      if (computedHash !== user.passwordHash) {
        return res.status(400).json({ error: 'Incorrect current password' });
      }
      const newSalt = crypto.randomBytes(16).toString('hex');
      const newHash = hashPassword(newPassword, newSalt);
      updateData.passwordHash = newHash;
      updateData.salt = newSalt;
    }

    const updatedUser = await prisma.user.update({
      where: { id: req.user.userId },
      data: updateData,
      select: { id: true, name: true, email: true }
    });

    res.status(200).json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (err) { next(err); }
};
