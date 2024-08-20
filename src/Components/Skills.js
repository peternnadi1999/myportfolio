import React from "react";
import themeContext from "./theme";
import { useContext } from "react";

export default function Skills() {
  const themeCtx = useContext(themeContext);
  return (
    <React.Fragment>
      <div className="w-screen font-Satoshi pt-16" id="Skills">
        <h2 className="text-lg md:text-2xl mt-5 text-center text-fuchsia-800 font-bold">
          Skills
        </h2>
        <div className="flex mt-2 w-30 md:w-50 h-1 justify-center">
          <span className="h-1 rounded-l-md w-14 md:w-16 bg-slate-200"></span>
          <span className="h-1 w-14 md:w-16 bg-fuchsia-700"></span>
          <span className="h-1 rounded-r-md w-14 md:w-16 bg-slate-200"></span>
        </div>
        <p className={`uppercase text-center font-league md:w-full w-60 m-auto ${
            themeCtx.theme ? "text-fuchsia-900" : "text-white"
          } font-medium`}>
          my skills
        </p>

        <div className="w-11/12 m-auto flex flex-col md:flex-row flex-wrap md:w-4/5">
          <div
            className={`skill ${
              themeCtx.theme ? "text-black" : "text-white"
            } text-white md:mx-7 md:mr-16 w-11/12 m-auto md:w-2/5`}
          >
            <p className="uppercase">HTML</p>
            <div className="skill-bar skill1 rounded-tr-full rounded-br-full">
              <span className="skill-count1">80%</span>
            </div>
          </div>
          <div
            className={`skill ${
              themeCtx.theme ? "text-black" : "text-white"
            } md:mx-7 w-11/12 m-auto md:w-2/5`}
          >
            <p className="uppercase">CSS</p>
            <div className="skill-bar skill2 rounded-tr-full rounded-br-full">
              <span className="skill-count1">50%</span>
            </div>
          </div>
          <div
            className={`skill ${
              themeCtx.theme ? "text-black" : "text-white"
            } md:mx-7 w-11/12 m-auto md:w-2/5`}
          >
            <p className="uppercase">Tailwind Css</p>
            <div className="skill-bar skill7 rounded-tr-full rounded-br-full">
              <span className="skill-count1">50%</span>
            </div>
          </div>
          <div
            className={`skill ${
              themeCtx.theme ? "text-black" : "text-white"
            } md:mx-16 w-11/12 m-auto md:w-2/5`}
          >
            <p className="uppercase">Vue</p>
            <div className="skill-bar skill3 rounded-tr-full rounded-br-full">
              <span className="skill-count1">70%</span>
            </div>
          </div>
          <div
            className={`skill ${
              themeCtx.theme ? "text-black" : "text-white"
            } md:mx-7 w-11/12 m-auto md:w-2/5`}
          >
            <p className="uppercase">REACT</p>
            <div className="skill-bar skill4 rounded-tr-full rounded-br-full">
              <span className="skill-count1">40%</span>
            </div>
          </div>
          <div
            className={`skill ${
              themeCtx.theme ? "text-black" : "text-white"
            } md:mx-16 w-11/12 m-auto md:w-2/5`}
          >
            <p className="uppercase">GIT</p>
            <div className="skill-bar skill5 rounded-tr-full rounded-br-full">
              <span className="skill-count1">70%</span>
            </div>
          </div>
          <div
            className={`skill ${
              themeCtx.theme ? "text-black" : "text-white"
            } md:mx-7 w-11/12 m-auto md:w-2/5`}
          >
            <p className="uppercase">Node</p>
            <div className="skill-bar skill4 rounded-tr-full rounded-br-full">
              <span className="skill-count1">40%</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
