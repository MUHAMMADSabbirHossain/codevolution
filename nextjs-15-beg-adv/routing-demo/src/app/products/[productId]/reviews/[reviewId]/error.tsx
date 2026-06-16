"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ReviewIdError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.log(error);

  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <>
      {error.message}
      <hr />
      {error.name}
      <hr />
      {error.cause}
      <hr />
      {error.stack}

      {/*retry function will attempt to rerender client side. */}
      {/* <button onClick={() => reset()}>Try Again</button> */}

      {/*reload function will attempt to rerender server side. */}
      <button onClick={() => reload()}>Try Again</button>
    </>
  );
}
