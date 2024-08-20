import React from "react";
import { useState, useContext } from "react";
import themeContext from "./theme";

export default function Footer() {
  const [top, settop] = useState(false);
  const themeCtx = useContext(themeContext);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      settop(true);
    } else {
      settop(false);
    }
  });

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const change = () => {
    if (themeCtx.theme === true) {
      themeCtx.changeColor(false);
    }
  };
  const change1 = () => {
    if (themeCtx.theme === false) {
      themeCtx.changeColor(true);
    }
  };
  return (
    <React.Fragment>
      <div
        className={` ${
          themeCtx.theme
            ? "bg-slate-200 text-fuchsia-900 "
            : "text-white bg-slate-700"
        }   m-auto text-sm w-full text-center pt-5 h-16`}
      >
        &copy; 2022. Designed by Peter. All right reserved.
      </div>

      <div
        className={`fixed right-1 bottom-40 m-auto flex flex-col p-2 ${
          themeCtx.theme
            ? "bg-slate-200 text-fuchsia-900 "
            : "text-white bg-slate-700"
        }  shadow-xl`}
      >
        <span
          className="py-2 border-b-2 border-slate-500 cursor-pointer"
          onClick={change1}
        >
          <i className="fa fa-adjust py-2 px-2"></i>
        </span>
        <span className="py-2 cursor-pointer" onClick={change}>
          <i className="fa fa-moon-o py-2 px-2 "></i>
        </span>
      </div>

      {top && (
        <div
          onClick={goToTop}
          className="fixed right-3 h-10 w-10 bottom-10 rounded-full text-white bg-black border-fuchsia-900 border-4"
        >
          <span className="text-white">
            <i className="fa fa-arrow-up py-2 px-2 "></i>
          </span>
        </div>
      )}
    </React.Fragment>
  );
}
