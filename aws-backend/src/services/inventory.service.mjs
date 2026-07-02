import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function reserveInventory(productId, qty) {
  return prisma.$transaction(async (tx) => {
    // Ensure enough free stock: quantity - reservedQuantity >= qty
    const updated = await tx.product.updateMany({
      where: {
        id: productId,
        quantity: { gte: qty }
      },
      data: {
        reservedQuantity: { increment: qty }
      }
    });

    if (updated.count === 0) {
      throw new Error('Insufficient stock');
    }
    
    // Also enforce that reservedQuantity does not exceed quantity (safeguard)
    const check = await tx.product.findUnique({ where: { id: productId }});
    if (check.reservedQuantity > check.quantity) {
      throw new Error('Insufficient stock');
    }
    
    return true;
  });
}

export async function finalizeInventory(productId, qty) {
  return prisma.$transaction(async (tx) => {
    // Decrement quantity and decrement reservedQuantity atomically
    const updated = await tx.product.updateMany({
      where: {
        id: productId,
        quantity: { gte: qty },
        reservedQuantity: { gte: qty }
      },
      data: {
        quantity: { decrement: qty },
        reservedQuantity: { decrement: qty }
      }
    });

    if (updated.count === 0) {
      throw new Error('Finalize failed due to stock mismatch');
    }
    return true;
  });
}

export async function releaseInventory(productId, qty) {
  return prisma.product.updateMany({
    where: { 
      id: productId,
      reservedQuantity: { gte: qty }
    },
    data: { reservedQuantity: { decrement: qty } }
  });
}
