import Header from "./components/Header";

function App() {
  return (
    <div className="w-full p-10 container mx-auto lg:mt-4">
      <div className="">
        <Header />
        <main>Main</main>
        <div className="">Cards</div>

        <div className="text-center text-slate-500 py-8">
          Challenge by
          <a
            className="px-2 font-semibold text-blue-400"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a className="px-2 font-semibold text-blue-400" href="#">
            Bogale Demas
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default App;
