import Link from "next/link";

export default function ProductsPage(): React.JSX.Element {
  return (
    <>
      <h1>Feature Products</h1>
      <Link href="/products/1">Product 1</Link>
      <Link href="/products/2">Product 2</Link>
      <Link href="/products/3">Product 3</Link>
    </>
  );
}
