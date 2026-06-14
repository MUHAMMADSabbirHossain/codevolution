"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  console.log(pathname);

  const [, , productId, , reviewId] = pathname.split("/");
  console.log(pathname.split("/"));

  return (
    <div>
      <h2>
        Review {reviewId} not found for product {productId}
      </h2>
    </div>
  );
}
