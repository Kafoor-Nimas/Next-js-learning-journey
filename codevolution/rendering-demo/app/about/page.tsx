import { cookies } from "next/headers";

export default async function AboutPage() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  console.log("ABout server component");
  return <div>AboutPage {new Date().toLocaleTimeString()}</div>;
}
