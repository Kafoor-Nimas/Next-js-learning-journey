import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog Page",
  },
};

export default function Blog() {
  return <h1>My blog</h1>;
}
