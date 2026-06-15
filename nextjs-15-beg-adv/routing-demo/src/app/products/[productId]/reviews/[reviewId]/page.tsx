import { notFound, redirect } from "next/navigation";

export default async function ProductReviewDeatils({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
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
