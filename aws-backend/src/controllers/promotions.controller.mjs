import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// GET /admin/coupons
export const getCoupons = async (req, res, next) => {
  try {
    const coupons = await prisma.coupon.findMany({ orderBy: { createdAt: 'desc' } });
    res.json({ coupons });
  } catch (error) { next(error); }
};

// POST /admin/coupons
export const createCoupon = async (req, res, next) => {
  try {
    const coupon = await prisma.coupon.create({ data: req.body });
    res.status(201).json({ coupon });
  } catch (error) {
    if (error.code === 'P2002') return res.status(400).json({ error: "Coupon code already exists" });
    next(error);
  }
};

// PATCH /admin/coupons/:id
export const updateCoupon = async (req, res, next) => {
  try {
    const { id } = req.params;
    const coupon = await prisma.coupon.update({ where: { id }, data: req.body });
    res.json({ coupon });
  } catch (error) { next(error); }
};

// DELETE /admin/coupons/:id
export const deleteCoupon = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.coupon.delete({ where: { id } });
    res.json({ message: "Coupon deleted" });
  } catch (error) { next(error); }
};

// BANNERS & DEALS 
export const getBanners = async (req, res, next) => {
  try {
    const banners = await prisma.banner.findMany({ orderBy: { displayOrder: 'asc' } });
    res.json({ banners });
  } catch (error) { next(error); }
};

export const createBanner = async (req, res, next) => {
  try {
    const banner = await prisma.banner.create({ data: req.body });
    res.status(201).json({ banner });
  } catch (error) { next(error); }
};

export const updateBanner = async (req, res, next) => {
  try {
    const { id } = req.params;
    const banner = await prisma.banner.update({ where: { id }, data: req.body });
    res.json({ banner });
  } catch (error) { next(error); }
};

export const deleteBanner = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.banner.delete({ where: { id } });
    res.json({ message: "Banner deleted" });
  } catch (error) { next(error); }
};
