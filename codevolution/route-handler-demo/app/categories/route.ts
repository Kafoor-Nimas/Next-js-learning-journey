export const dynamic = "force-static";

export async function GET() {
  const categories = [
    {
      id: 1,
      name: "Electronics",
    },
    {
      id: 2,
      name: "Books",
    },
  ];
  return Response.json(categories);
}
