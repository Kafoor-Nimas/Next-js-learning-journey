import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Blog Page",
  },
};

export default function Blog() {
  return (
    <>
      <Link href="/">
        <p>Home</p>
      </Link>
      <h1>My blog</h1>
    </>
  );
}
