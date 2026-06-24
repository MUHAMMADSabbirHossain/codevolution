"use client";

import Link from "next/link";
import { removeProduct } from "@/actions/products";
import { useOptimistic } from "react";
import Form from "next/form";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export function ProductDetail({ products }: { products: Product[] }) {
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products,
    (currentProducts, productId) => {
      return currentProducts.filter((p) => p.id !== productId);
    },
  );

  const removeProductById = async (productId: number) => {
    setOptimisticProducts(productId);
    await removeProduct(productId);
  };

  return (
    <>
      <ul className="space-y-4 p-4">
        {optimisticProducts.map((product) => (
          <li
            key={product.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            <h2 className="text-xl font-semibold">
              <Link href={`/product-db/${product.id}`}>{product.title}</Link>
            </h2>
            <p>{product.description}</p>
            <p className="font-medium text-lg">${product.price}</p>

            <Form
              // action={removeProduct.bind(null, product.id)}
              action={removeProductById.bind(null, product.id)}
            >
              <button
                type="submit"
                className="px-4 py-2 text-white mt-4 bg-red-500 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </Form>
          </li>
        ))}
      </ul>
    </>
  );
}
