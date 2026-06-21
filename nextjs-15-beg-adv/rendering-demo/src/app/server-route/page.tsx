import ImageSlider from "@/components/image-slider";
// import { clientSideFunction } from "@/utils/client-utils";
import { serverSideFunction } from "@/utils/server-utils";
// import "client-only";

export default function ServerRoutePage() {
  const result = serverSideFunction();
  // const clientResult = clientSideFunction(); // You're importing a component that imports client-only. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.

  const settings = {
    dots: true,
  };

  return (
    <>
      <h1>Server route {result}</h1>
      {/* <h1>{clientResult}</h1> */}
      <ImageSlider />
    </>
  );
}
