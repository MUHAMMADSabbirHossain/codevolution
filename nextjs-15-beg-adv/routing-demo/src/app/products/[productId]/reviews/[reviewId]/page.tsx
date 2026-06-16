import { notFound, redirect } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ProductReviewDeatils({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review");
  }
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    // notFound();
    redirect("/products"); // redirect to another route
  }

  return (
    <h1>
      Product {productId} reviews {reviewId}
    </h1>
  );
}
