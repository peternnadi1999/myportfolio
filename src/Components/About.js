import React from "react";
import cv from "../image/My cv.docx";
import themeContext from "./theme";
import { useContext } from "react";

function About() {
  const themeCtx = useContext(themeContext);
  return (
    <React.Fragment>
      <div className="w-screen font-Satoshi pt-16" id="About">
        <h2 className="text-lg md:text-2xl mt-5 text-center text-fuchsia-800 font-bold">
          About Me
        </h2>
        <div className="flex mt-2 w-30 md:w-50 h-1 justify-center">
          <span className="h-1 rounded-l-md w-14 md:w-16 bg-slate-200"></span>
          <span className="h-1 w-14 md:w-16 bg-fuchsia-700"></span>
          <span className="h-1 rounded-r-md w-14 md:w-16 bg-slate-200"></span>
        </div>
        <p
          className={`uppercase text-center md:w-full w-60 m-auto ${
            themeCtx.theme ? "text-fuchsia-900" : "text-white"
          } font-medium font-league`}
        >
          meet me
        </p>

        <div className="flex justify-center md:flex-row flex-col bg-[url(./image/image_bg2.png)] bg-repeat-x  m-auto mt-1">
          <div className="w-80 m-auto md:m-1 md:w-1/2 flex flex-col">
            <div
              //   style={{ height: "600px" }}
              className={`images my-auto shadow-inner drop-shadow-lg border-double border-8 ${
                themeCtx.theme ? "bg-gray-100" : "bg-gray-700"
              } bg-gray-100 hover:scale-100 bg-[url(./image/photo.png)] bg-cover m-auto mt-5 md:m-3 w-11/12 md:w-full`}
            ></div>
            <div className="flex justify-center my-5">
              {/* <a
                href="#"
                target="_blank"
                className="rounded-full text-white bg-fuchsia-800 h-10 w-10 px-3 py-2 mx-3 cursor-pointer hover:scale-100 hover:text-fuchsia-800 hover:bg-slate-200 drop-shadow-lg shadow-inner"
              >
                <i className="fa fa-facebook "></i>
              </a> */}
              <a
                href="https://twitter.com/PeterNnadi7"
                target="_blank"
                className="rounded-full text-white bg-fuchsia-800 h-10 w-10 px-3 py-2 mx-3 cursor-pointer hover:scale-100 hover:text-fuchsia-800 hover:bg-slate-200 drop-shadow-lg shadow-lg"
              >
                <i className="fa fa-twitter "></i>
              </a>
              <a
                href="https://www.linkedin.com/in/nnadi-peter-emeka-a002371a9"
                target="_blank"
                className="rounded-full text-white bg-fuchsia-800 h-10 w-10 px-3 py-2 mx-3 cursor-pointer hover:scale-100 hover:text-fuchsia-800 hover:bg-slate-200 drop-shadow-lg shadow-inner"
              >
                <i className="fa fa-linkedin "></i>
              </a>
              <a
                href="https://github.com/peternnadi1999"
                target="_blank"
                className="rounded-full text-white bg-fuchsia-800 h-10 w-10 px-3 py-2 mx-3 cursor-pointer hover:scale-100 hover:text-fuchsia-800 hover:bg-slate-200 drop-shadow-lg shadow-inner"
              >
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="my-auto font-Satoshi md:mx-10 mx-auto p-8 w-screen md:w-96">
            <h2 className="text-3xl text-black py-2 font-bold">
              Hi There! I'm Nnadi Peter
            </h2>
            <h4 className="text-violet-800 font-bold text-2xl">Web Developer</h4>
            <p
              className={`${
                themeCtx.theme ? "text-gray-800" : "text-white"
              }text-lg py-6 font-Satoshi`}
            >
              I'm a web Developer in Nigeria, Looking for new
              opportunitiees to maximize potentials. i find joy in building
              excellent software that improve the lives of those around me. I’ve
              found my passion in web development. I love spending time coding
              and encountering new challenges. I’m highly adaptable to new
              challenges and projects. i enojoy working with people who are
              solving big problems in new and exciting ways.
            </p>
            <ul
              className={`${
                themeCtx.theme ? "text-gray-600" : "text-white"
              } font-Satoshi text-md mb-5 `}
            >
              <li className="py-1">
                Birthday : <b>June 6.</b>
              </li>
              <li className="py-1">
                Phone : <b>07069275802.</b>
              </li>
              <li className="py-1">
                Email : <b>peternnadi1999@gmail.com.</b>
              </li>
              <li className="py-1">
                From : <b>Enugu State, Nigeria.</b>
              </li>
              <li className="py-1">
                Language : <b>English, Igbo.</b>
              </li>
            </ul>

            <a
              href={cv}
              download="cv"
              className="cursor-pointer animate-bounce bg-fuchsia-900 px-12 py-3 mt-7 hover:bg-slate-200 shadow-xl font-semibold drop-shadow-xl hover:text-fuchsia-800 text-sm text-gray-50 rounded-full transition ease-in-out duration-5000"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
