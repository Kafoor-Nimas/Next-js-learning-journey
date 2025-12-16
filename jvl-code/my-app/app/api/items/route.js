export async function GET(req) {
  const type = req.nextUrl.searchParams.get("type");
  console.log("Type:", type);
  return Response.json([
    { title: "Nokia Mobile" },
    { title: "Samsung Mobile" },
  ]); 
}
export async function POST(req) {
    const body=await req.json();
    console.log(body)
  return Response.json({ success: true, message: "POST Success" });
}
