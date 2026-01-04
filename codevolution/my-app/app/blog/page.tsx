import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Blog Page",
  },
};

export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Intentional delay");
    }, 2000);
  });
  return (
    <>
      <Link href="/">
        <p>Home</p>
      </Link>
      <h1>My blog</h1>
    </>
  );
}
