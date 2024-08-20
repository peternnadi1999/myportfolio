import React from "react";
import themeContext from "./theme";
import { useContext } from "react";

export default function Header() {
  const themeCtx = useContext(themeContext);

  return (
    <React.Fragment>
      <div
        id="Home"
        className={`${
          themeCtx.theme ? "bg-slate-200" : "bg-slate-800"
        } h-screen z-30 font-league md:h-screen flex justify-around w-screen  bg-cover border rounded-bl-full md:rounded-tr md:rounded-tl`}
      >
        <div className="m-auto">
          <h5 className="text-fuchsia-900 pl-2 text-lg md:text-3xl">
            Hello I'm
          </h5>
          <h2
            className={`${
              themeCtx.theme ? "text-purple-900" : "text-fuchsia-900"
            } ml-5  mt-5 font-semibold text-4xl`}
          >
            Nnadi Peter
          </h2>
          <h3
            className={
              themeCtx.theme
                ? "text-gray-500 ml-9 mt-5 text-2xl"
                : "text-white ml-9 mt-5 text-2xl"
            }
          >
            A Frontend Web Developer
          </h3>
          <a href="#Contact">
            <button className="cursor-pointer z-50 ml-20 animate-bounce bg-fuchsia-900 py-2 px-16 mt-10 hover:bg-slate-200 shadow-inner font-bold drop-shadow-xl hover:text-fuchsia-800 text-lg text-gray-50 rounded-bl-full rounded-tr-full transition ease-in-out duration-4000">
              Hire Me
            </button>
          </a>
        </div>
        <div className="h-96 hidden md:block m-auto ring-white outline-8 hover:scale-105 outline-white ring-8 w-96 bg-[url(./image/photo.png)] bg-cover rounded-full shadow-2xl border-8 border-slate-100"></div>
      </div>
      <div className="background-wrapper">
        <div className="bubble x1"></div>
        <div className="bubble x2"></div>
        <div className="bubble x3"></div>
        <div className="bubble x4"></div>
        <div className="bubble x5"></div>
        <div className="bubble x6"></div>
        <div className="bubble x7"></div>
        <div className="bubble 8x"></div>
        <div className="bubble 11x"></div>
        <div className="bubble x9 hidden md:block"></div>
        <div className="bubble x10"></div>
      </div>
    </React.Fragment>
  );
}
