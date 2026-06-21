import ImageSlider from "@/components/image-slider";
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoutePage() {
  const result = serverSideFunction();

  const settings = {
    dots: true,
  };

  return (
    <>
      <h1>Server route {result}</h1>
      <ImageSlider />
    </>
  );
}
