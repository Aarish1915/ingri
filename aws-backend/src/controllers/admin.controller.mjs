import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();

// Helper to hash passwords (matching exactly how the legacy system did it)
function hashPassword(password, salt) {
  return crypto.pbkdf2Sync(password, salt, 100000, 64, "sha512").toString("hex");
}

function generateAdminToken(admin) {
  const payload = JSON.stringify({
    id: admin.id,
    email: admin.email,
    role: admin.role || "superadmin",
    isAdmin: true,
    exp: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
  });
  return Buffer.from(payload).toString("base64url");
}

// POST /admin/login
export const adminLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "Email and password required" });

    const admin = await prisma.admin.findUnique({ where: { email: email.toLowerCase() } });
    if (!admin) return res.status(401).json({ error: "Invalid credentials" });

    const hash = hashPassword(password, admin.salt);
    if (hash !== admin.passwordHash) return res.status(401).json({ error: "Invalid credentials" });

    const token = generateAdminToken(admin);
    res.json({ token, admin: { id: admin.id, name: admin.name, email: admin.email, role: admin.role } });
  } catch (error) {
    next(error);
  }
};

// GET /admin/me
export const getAdminProfile = async (req, res, next) => {
  try {
    const admin = await prisma.admin.findUnique({
      where: { id: req.admin.id }, // req.admin is set by auth middleware
      select: { id: true, name: true, email: true, role: true }
    });
    
    if (!admin) return res.status(404).json({ error: "Admin not found" });
    res.json({ admin });
  } catch (error) {
    next(error);
  }
};

// GET /admin/dashboard
export const getDashboardStats = async (req, res, next) => {
  try {
    const today = new Date().toISOString().split("T")[0];
    
    // Execute all count queries in parallel for maximum speed
    const [
      totalUsers, totalProducts, totalReservations, todayReservations,
      totalOrders, pendingOrders, totalPayments, totalBlogs, totalReviews
    ] = await Promise.all([
      prisma.user.count(),
      prisma.product.count(),
      prisma.reservation.count(),
      prisma.reservation.count({ 
        where: { 
          reservationAt: { 
            gte: new Date(`${today}T00:00:00.000Z`), 
            lte: new Date(`${today}T23:59:59.999Z`) 
          } 
        } 
      }),
      prisma.order.count(),
      prisma.order.count({ where: { status: "pending" } }),
      prisma.payment.count(),
      prisma.blog.count(),
      prisma.review.count()
    ]);

    // Aggregate revenue using Prisma's aggregate function
    const revenueAgg = await prisma.payment.aggregate({
      _sum: { amount: true },
      where: { status: "completed" }
    });

    res.json({
      stats: {
        totalUsers, totalProducts, totalReservations, todayReservations,
        totalOrders, pendingOrders, totalPayments,
        totalRevenue: revenueAgg._sum.amount || 0,
        totalBlogs, totalReviews,
      }
    });
  } catch (error) {
    next(error);
  }
};

// GET /admin/users
export const getAdminUsers = async (req, res, next) => {
  try {
    const { page = 1, limit = 50, search } = req.query;
    const pageNum = parseInt(page, 10) || 1;
    const limitNum = parseInt(limit, 10) || 50;

    const where = {};
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } }
      ];
    }

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (pageNum - 1) * limitNum,
        take: limitNum,
        select: { id: true, name: true, email: true, createdAt: true } // Exclude passwords
      }),
      prisma.user.count({ where })
    ]);

    res.json({
      users,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum)
      }
    });
  } catch (error) {
    next(error);
  }
};

// GET /admin/orders
export const getAdminOrders = async (req, res, next) => {
  try {
    const { status, limit = 50 } = req.query;
    const limitNum = parseInt(limit, 10);
    const where = status ? { status } : {};
    
    const orders = await prisma.order.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: limitNum,
      include: { items: true }
    });
    res.json({ orders });
  } catch (error) {
    next(error);
  }
};

// GET /admin/reviews
export const getAdminReviews = async (req, res, next) => {
  try {
    const { limit = 5 } = req.query;
    const reviews = await prisma.review.findMany({
      orderBy: { createdAt: 'desc' },
      take: parseInt(limit, 10),
    });
    res.json({ reviews });
  } catch (error) {
    next(error);
  }
};

// GET /admin/inquiries
export const getAdminInquiries = async (req, res, next) => {
  try {
    // Contact model does not exist yet. Returning empty array to prevent dashboard crash.
    res.json({ inquiries: [] });
  } catch (error) {
    next(error);
  }
};
