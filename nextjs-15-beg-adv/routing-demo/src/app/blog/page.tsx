import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    // default: "Blog", // add to parent title metadata if present
    // template: "%s | Blog",
    absolute: "Blog", // replace parent title metadata
  },
};

export default async function Blog() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <h1>My Blog</h1>;
}
