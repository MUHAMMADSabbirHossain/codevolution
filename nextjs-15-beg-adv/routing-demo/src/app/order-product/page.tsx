"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct(): React.JSX.Element {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing order");

    router.push("/"); // push method
    router.replace("/");

    // Key Navigation MethodsUse these methods to send users to different pages or manage their history:
    // push(href, options): Navigates to a specific route and adds a new entry to the browser's history stack.
    // replace(href, options): Navigates to a specific route but replaces the current entry in the history stack (ideal for redirects).
    // back(): Navigates the user back one step in the browser's history.
    // forward(): Navigates the user forward one step in the browser's history.
    // refresh(): Reloads the current route, asking the server for data again while preserving the user's current client-side state.
    // prefetch(href): Preloads the linked route in the background for faster page loads
  };

  return (
    <>
      <h1>Order Product</h1>

      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
