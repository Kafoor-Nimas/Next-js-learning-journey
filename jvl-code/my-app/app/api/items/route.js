export async function GET() {
  return Response.json([
    { title: "Nokia Mobile" },
    { title: "Samsung Mobile" },
  ]);
}
export async function POST() {
  return Response.json({ success: true, message: "POST Success" });
}
