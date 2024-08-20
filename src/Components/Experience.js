import React from "react";
import themeContext from "./theme";
import { useContext } from "react";

export default function Experience() {
  const themeCtx = useContext(themeContext);
  return (
    <React.Fragment>
      <div className="w-screen font-Satoshi pt-16" id="Experience">
        <h2 className="text-lg md:text-2xl mt-5 text-center text-fuchsia-800 font-bold">
          Experience
        </h2>
        <div className="flex mt-2 w-30 md:w-50 h-1 justify-center">
          <span className="h-1 rounded-l-md w-14 md:w-16 bg-slate-200"></span>
          <span className="h-1 w-14 md:w-16 bg-fuchsia-700"></span>
          <span className="h-1 rounded-r-md w-14 md:w-16 bg-slate-200"></span>
        </div>
        <p className={`uppercase text-center md:w-full w-60 m-auto ${themeCtx.theme ? "text-fuchsia-900":"text-white"} font-medium font-league`}>
          Education/Experience
        </p>

        <section className="mt-9">
          <div
            className={`flex md:flex-row flex-col  md:w-4/5 w-11/12 m-auto ${
              themeCtx.theme ? "bg-slate-200 text-black" : "bg-slate-700 text-white"
            } 
         justify-between shadow-xl rounded-md p-4`}
          >
            <div className="flex justify-between md:w-1/2  w-full">
              <div className="flex flex-col md:mt-0  mt-6">
                <i className="fa fa-graduation-cap  text-fuchsia-700 text-3xl"></i>
                <div className="md:h-32 h-40 w-1 m-auto ml-4 bg-fuchsia-700"></div>

                <i className="fa fa-graduation-cap text-fuchsia-700 text-3xl"></i>
                <div className="md:h-32 h-40 w-1 m-auto ml-4 bg-fuchsia-700"></div>
                <i className="fa fa-cap text-fuchsia-700"></i>
              </div>
              <div className="w-10/12 mt-2">
                <div>
                  <h3 className="-pb-2 font-bold">
                    Frontend Developer at Grandilo technology
                  </h3>
                  <h3 className="pb-4 text-xs">
                    {" "}
                    August 2020 - September 2022.
                  </h3>
                  <p className="text-xs">
                    Collaborated closely with backend developers, designers, and
                    other team members to ensure seamless integration and timely
                    delivery of web projects.Crafted clear and concise code
                    documentation to enhance team collaboration and facilitate
                    future maintenance. Interacted proficiently with backend
                    APIs to fetch and display data on the frontend.
                  </p>
                </div>
                <div className=" mt-5">
                  <h3 className="-pb-2 font-bold">
                    Industrial Attachment at Goldpark logistics(IT)
                  </h3>
                  <h3 className="pb-4 text-xs">May 2023 - August 2023.</h3>
                  <p className="text-xs">
                    Contribute to the continuous improvement of logistics
                    operations by identifying areas for automation, process
                    optimization, and innovation. And also implemented a
                    Warehouse reporting system
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between md:w-1/2 w-full md:mt-0 mt-16">
              <div className="flex flex-col">
                <i className="fa fa-graduation-cap  text-fuchsia-700 text-3xl"></i>
                <div className="h-32 w-1 m-auto ml-4 bg-fuchsia-700"></div>

                <i className="fa fa-graduation-cap text-fuchsia-700 text-3xl"></i>
                <div className="h-32 w-1 m-auto ml-4 bg-fuchsia-700"></div>
                <i className="fa fa-cap text-fuchsia-700"></i>
              </div>
              <div className="w-10/12 mt-2">
                <div>
                  <h3 className="-pb-2 font-bold">OND in Computer Science</h3>
                  <h3 className="pb-4 text-xs">
                    {" "}
                    September 2017 - August 2019.
                  </h3>
                  <p className="text-md">Federal Polytechnic Idah</p>
                </div>
                <div className="mt-20">
                  <h3 className="-pb-2 font-bold">
                    Bachelor's Degree in Computer Science
                  </h3>
                  <h3 className="pb-4 text-xs">June 2021 - present.</h3>
                  <p className="text-md">University of Nigeria, Nsukka.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
