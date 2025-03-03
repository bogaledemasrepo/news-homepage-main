import React, { useState } from "react";

function Header() {
  const navlink = ["Home", "New", "Popular", "Trending", "Catagoriey"];
  const [navOpend, setNavOpend] = useState(false);
  return (
    <header className="flex items-center justify-between">
      <div className="w-12 h-12">
        <img src="./assets/images/logo.svg" alt="logo" />
      </div>
      <ul className="hidden sm:flex space-x-4">
        {navlink.map((Item) => (
          <li key={Item}>
            <a href="">
              <p className="text-slate-500 font-semibold hover:text-red-300">
                {Item}
              </p>
            </a>
          </li>
        ))}
      </ul>
      <div
        className={`w-12 h-12 sm:hidden cursor-pointer ${
          !navOpend && "hidden"
        }`}
        onClick={() => setNavOpend(!navOpend)}
      >
        <img src="./assets/images/icon-menu.svg" alt="" />
      </div>
      <div
        className={`fixed sm:hidden left-0 top-0 w-full h-full bg-[#3d3f4653] flex flex-col items-end pt-10 pr-1 z-50 ${
          navOpend && "hidden"
        }`}
      >
        <div className="w-[50%] h-full bg-slate-100 absolute right-0 top-0 py-6 flex flex-col items-end">
          <div
            className="w-8 h-8 cursor-pointer m-4"
            onClick={() => setNavOpend(!navOpend)}
          >
            <img src="./assets/images/icon-menu-close.svg" alt="" />
          </div>
          <ul className="w-full my-12 flex flex-col gap-2">
            {navlink.map((Item) => (
              <li
                key={Item}
                className="hover:bg-slate-300  cursor-pointer duration-200 w-full"
              >
                <p className="px-6 py-2 text-slate-500 hover:text-red-400 font-semibold">
                  {Item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
