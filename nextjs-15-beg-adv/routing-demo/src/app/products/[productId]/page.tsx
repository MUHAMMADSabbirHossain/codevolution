import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;

  // API call for Product details
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Macbook ${id}`);
    }, 100);
  });

  return {
    title: `Product ${title}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  const productId = (await params).productId;

  return <h1>Details about the product {productId}</h1>;
}
