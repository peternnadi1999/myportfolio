import React from "react";
import themeContext from "./theme";
import { useContext } from "react";  

export default function Portfolio() {
  
  const themeCtx = useContext(themeContext);
  return (
    <React.Fragment>
      <div
        className="w-screen pt-16 bg-[url(./image/image_bg2.png)] bg-repeat-none bg-cover"
        id="Portfolio"
      >
        <h2 className="text-lg md:text-2xl mt-5 text-center text-fuchsia-800 font-bold">
          Portfolio
        </h2>
        <div className="flex mt-2 w-30 md:w-50 h-1 justify-center">
          <span className="h-1 rounded-l-md w-14 md:w-16 bg-slate-200"></span>
          <span className="h-1 w-14 md:w-16 bg-fuchsia-700"></span>
          <span className="h-1 rounded-r-md w-14 md:w-16 bg-slate-200"></span>
        </div>
        <p className={`uppercase text-center font-league md:w-full w-60 m-auto ${
            themeCtx.theme ? "text-fuchsia-900" : "text-white"
          } font-medium`}>
          Latest works
        </p>

        <div className="flex flex-col md:flex-row flex-wrap w-11/12  md:w-11/12 m-auto justify-center">
          <div className=" bg-[url(./image/lad.jpg)] bg-no-repeat md:bg-cover bg-contain h-60 m-auto md:w-5/12 w-11/12 border-4 my-3 shadow-sm rounded-3xl">
            {/* <img src="" className="w-auto h-auto" alt="first project"></img> */}
          </div>
          <div className=" h-60 m-auto md:w-5/12 w-11/12 border-4 my-3 shadow-sm rounded-3xl">
            <img src="" alt="first project"></img>
          </div>
          <div className=" h-60 m-auto md:w-5/12 w-11/12 border-4 my-3 shadow-sm rounded-3xl">
            <img src="" alt="first project"></img>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
