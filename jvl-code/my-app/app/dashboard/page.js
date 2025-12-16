"use client";

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const back = () => {
    router.push("/");
  };
  return (
    <main className="p-8">
      <button
        onClick={back}
        className="bg-blue-500 rounded text-white font-bold py-2 px-4"
      >
        Back
      </button>
      <h1 className="text-3xl text-red-500 font-bold">Dashboard Page</h1>
    </main>
  );
}
