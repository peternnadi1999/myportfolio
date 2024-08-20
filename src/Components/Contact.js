import React from "react";
import themeContext from "./theme";
import { useContext, useEffect } from "react";
import AOS from "aos";

export default function Contact() {
  const themeCtx = useContext(themeContext);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <div className="w-screen font-Satoshi pt-16 mb-12" id="Contact">
        <h2 className="text-lg md:text-2xl mt-5 text-center text-fuchsia-800 font-bold font-league">
          Contact
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
          Have a question? or what to work together?
        </p>
        <form
          action="https://formsubmit.co/ab7a6172067a59278338e988841ec168"
          method="POST"
          className="pt-8  bg-[url(./image/image_bg2.png)] bg-no-repeat bg-center"
        >
          <div
            className="flex flex-col justify-center m-auto w-full"
            
          >
            <input
              className={` text-slate-500 m-auto my-3 w-80 md:w-1/2 rounded-full p-4 ${
                themeCtx.theme ? "bg-slate-100" : "bg-slate-600"
              }  outline-none shadow-xl`}
              placeholder="Name"
              name="name"
              type="text"
              required
            />

            <input
              className={` text-slate-500 m-auto my-3 w-80 md:w-1/2 rounded-full p-4   ${
                themeCtx.theme ? "bg-slate-100" : "bg-slate-600"
              } outline-none shadow-xl`}
              placeholder="Email"
              name="email"
              type="email"
              required
            />
            <input
              className={` text-slate-500 m-auto my-3 w-80 md:w-1/2 rounded-full p-4   ${
                themeCtx.theme ? "bg-slate-100" : "bg-slate-600"
              } outline-none shadow-xl`}
              placeholder="Subject"
              name="subject"
              type="text"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className={` text-slate-500 w-80 md:w-1/2 m-auto my-3 rounded-3xl p-4   ${
                themeCtx.theme ? "bg-slate-100" : "bg-slate-600"
              } outline-none shadow-xl`}
              rows="3"
              required
            ></textarea>

            <button
              type="submit"
              data-aos="fade-right"
              className="text-slate-100 w-36 m-auto bg-fuchsia-900 outline-none p-2 rounded-br-full font-semibold text-sm rounded-tl-full shadow-xl cursor-pointer hover:bg-slate-200 drop-shadow-xl hover:text-fuchsia-800 transition ease-in-out duration-5000"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
