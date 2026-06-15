import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    // default: "Blog", // add to parent title metadata if present
    // template: "%s | Blog",
    absolute: "Blog", // replace parent title metadata
  },
};

export default function Blog() {
  return <h1>My Blog</h1>;
}
