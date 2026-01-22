import Hello from "../../components/Hello";

const Home = () => {
  console.log("I am a server Component");
  return (
    <main>
      <h1 className="text-4xl font-medium">Welcome to Next js</h1>
      <Hello />
    </main>
  );
};

export default Home;
