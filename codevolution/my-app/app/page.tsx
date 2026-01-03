import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome home!</h1>
      <Link href="/blog">
        <p>Blog</p>
      </Link>
      <Link href="/products">
        <p>Products</p>
      </Link>
    </>
  );
}
