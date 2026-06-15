import Link from "next/link";

export default function Products(): React.JSX.Element {
  const productId = 100;

  return (
    <>
      <Link href="/">Home</Link>

      <h1>Product list</h1>

      <h2>
        <Link href="/products/1/reviews">Product 1 reviews</Link>
      </h2>
      <h2>
        <Link href="/products/2/reviews">Product 2 reviews</Link>
      </h2>
      <h2>
        <Link href="/products/3/reviews" replace>
          Product 3 reviews
        </Link>
      </h2>

      <h2>
        <Link href={`/products/${productId}`}>Product {productId} details</Link>
      </h2>
    </>
  );
}
