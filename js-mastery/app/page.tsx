import Hello from "./components/Hello";

const Home = () => {
    console.log("I am a server Component")
  return (
    <main>
      <div>Welcome to Next js</div>
      <Hello />
    </main>
  );
};

export default Home;
