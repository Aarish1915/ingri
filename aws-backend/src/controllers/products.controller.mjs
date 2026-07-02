import { PrismaClient } from '@prisma/client';
import { clearCache } from '../middlewares/cache.middleware.mjs';
const prisma = new PrismaClient();

export const getPublicProducts = async (req, res, next) => {
  try {
    const { category, search, sort, page = 1, limit = 20 } = req.query;
    const pageNum = parseInt(page, 10) || 1;
    const limitNum = parseInt(limit, 10) || 20;
    
    // Construct Prisma 'where' clause (replacing Mongoose filter)
    const where = { inStock: true };
    if (category && category !== "All") where.category = category;
    if (search) where.name = { contains: search, mode: 'insensitive' }; // Case-insensitive SQL search
    
    // Construct Prisma 'orderBy' clause (replacing Mongoose sortObj)
    let orderBy = { createdAt: 'desc' };
    if (sort === "price_asc") orderBy = { price: 'asc' };
    else if (sort === "price_desc") orderBy = { price: 'desc' };
    else if (sort === "rating") orderBy = { rating: 'desc' };
    else if (sort === "name") orderBy = { name: 'asc' };

    // Fetch paginated data and total count in parallel using SQL transactions
    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        orderBy,
        skip: (pageNum - 1) * limitNum,
        take: limitNum,
        include: { _count: { select: { productReviews: true } } }
      }),
      prisma.product.count({ where })
    ]);

    // Fetch distinct categories for the frontend filter UI
    const distinctCategories = await prisma.product.findMany({
      where: { inStock: true },
      distinct: ['category'],
      select: { category: true }
    });
    const categories = distinctCategories.map(c => c.category);

    // Map 'id' to '_id' and dynamically map reviews count
    const formattedProducts = products.map(p => ({ 
      ...p, 
      _id: p.id,
      reviews: p._count.productReviews 
    }));

    res.json({
      products: formattedProducts,
      categories,
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

export const getSingleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({ 
      where: { id },
      include: { _count: { select: { productReviews: true } } }
    });
    
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Get 6 related products in the same category
    const related = await prisma.product.findMany({
      where: {
        category: product.category,
        inStock: true,
        id: { not: product.id }
      },
      take: 6
    });

    // Inject dynamic review count into response
    const formattedProduct = { ...product, reviews: product._count.productReviews };

    res.json({ product: formattedProduct, related });
  } catch (error) {
    next(error);
  }
};

// ADMIN ROUTES (with Cache Invalidation)

export const createProduct = async (req, res, next) => {
  try {
    const data = req.body;
    const product = await prisma.product.create({ data });
    clearCache(); // Instantly invalidate menu cache
    res.status(201).json({ product });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const product = await prisma.product.update({ where: { id }, data });
    clearCache(); // Instantly invalidate menu cache to prevent selling at old prices
    res.json({ product });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.product.delete({ where: { id } });
    clearCache(); // Instantly invalidate menu cache
    res.json({ message: "Product deleted" });
  } catch (error) {
    next(error);
  }
};
