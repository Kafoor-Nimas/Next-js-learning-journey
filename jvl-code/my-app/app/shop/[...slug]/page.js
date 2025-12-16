export default async function Shop({ params }) {
  const { slug } = await params;
  return (
    <div>
      My Post : {slug[0]}/{slug[1]}/{slug[2]}{" "}
    </div>
  );
}
