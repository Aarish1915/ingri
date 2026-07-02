import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllRecipes = async (req, res, next) => {
  try {
    const recipes = await prisma.recipe.findMany({ orderBy: { createdAt: 'desc' } });
    res.status(200).json({ recipes });
  } catch (error) {
    next(error);
  }
};

export const getRecipeBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const recipe = await prisma.recipe.findUnique({ where: { slug } });
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
    res.status(200).json({ recipe });
  } catch (error) {
    next(error);
  }
};
