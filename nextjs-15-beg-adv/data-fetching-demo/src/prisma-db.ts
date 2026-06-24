import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaBetterSqlite3({ url: connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };

const seedProducts = async () => {
  const count = await prisma.product.count();

  if (count === 0) {
    await prisma.product.createMany({
      data: [
        {
          title: "Product 1",
          price: 500,
          description: "Product 1 description",
        },
        {
          title: "Product 2",
          price: 700,
          description: "Product 2 description",
        },
        {
          title: "Product 3",
          price: 1000,
          description: "Product 3 description",
        },
      ],
    });
  }
};

// Run seed if needed
seedProducts();

export async function getProducts(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  if (query) {
    return prisma.product.findMany({
      where: {
        OR: [
          { title: { contains: query } },
          { description: { contains: query } },
          { price: { equals: parseInt(query) } },
        ],
      },
    });
  }

  return prisma.product.findMany();
}

export async function getProduct(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return prisma.product.findUnique({
    where: { id },
  });
}

export async function addProduct(
  title: string,
  price: number,
  description: string,
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return prisma.product.create({
    data: { title, price, description },
  });
}

export async function updateProduct(
  id: number,
  title: string,
  price: number,
  description: string,
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return prisma.product.update({
    where: { id },
    data: { title, price, description },
  });
}

export async function deleteProduct(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return prisma.product.delete({
    where: { id },
  });
}
