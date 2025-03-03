import Button from "./components/Button";
import Header from "./components/Header";
import NewsCard from "./components/NewsCard";

function App() {
  return (
    <div className="w-full p-10 container mx-auto lg:mt-4">
      <div className="">
        <Header />
        <main className="flex flex-col md:flex-row relative mt-4 gap-8">
          <div className="flex flex-col md:flex-2 shadow-sm">
            <img
              className=""
              src="./assets/images//image-web-3-desktop.jpg"
              alt=""
            />
            <div className="w-full flex flex-col sm:flex-row my-4 gap-4">
              <h1 className="text-4xl text-slate-900">
                The Bright Future of Web 3.0?
              </h1>
              <div className="">
                <p className="my-4 leading-6 text-slate-500">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <Button />
              </div>
            </div>
          </div>
          <NewsCard />
        </main>
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
