import Link from "next/link";
import { getProducts } from "../../prisma-db";
import { removeProduct } from "@/actions/products";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsPrismaDBPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const products: Product[] = await getProducts(query);

  return (
    <>
      <ul className="space-y-4 p-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            <h2 className="text-xl font-semibold">
              <Link href={`/product-db/${product.id}`}>{product.title}</Link>
            </h2>
            <p>{product.description}</p>
            <p className="font-medium text-lg">${product.price}</p>

            <form action={removeProduct.bind(null, product.id)}>
              <button
                type="submit"
                className="px-4 py-2 text-white mt-4 bg-red-500 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </form>
          </li>
        ))}
      </ul>
    </>
  );
}
