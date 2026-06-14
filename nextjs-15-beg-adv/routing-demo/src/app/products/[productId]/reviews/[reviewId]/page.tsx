export default async function ProductReviewDeatils({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  return (
    <h1>
      Product {productId} reviews {reviewId}
    </h1>
  );
}
