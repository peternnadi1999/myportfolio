import logo from "../image/logo1.png";
import { useState } from "react";
import themeContext from "./theme";
import { useContext } from "react";

export default function Navbar() {
  const [isNav, setNav] = useState(false);
  // const Toggle = () => {
  //   console.log("clicked");
  //   setNav(!isNav);
  // };

  const openHadler = () => {
    setNav(true);
  };
  const closeHadler = () => {
    setNav(false);
  };
  const menus = [
    { name: "Home", link: "#Home" },
    { name: "About", link: "#About" },
    { name: "Skills", link: "#Skills" },
    { name: "Portfolio", link: "#Portfolio" },
    { name: "contact", link: "#Contact" },
  ];

  const themeCtx = useContext(themeContext);
  return (
    <>
      <div className="shadow-md w-full fixed z-40 top-0 left-0">
        <div
          className={`flex items-center w-full   justify-between h-14 ${
            themeCtx.theme ? "bg-slate-200 " : "bg-slate-600"
          }`}
        >
          <div className="font-bold text-2xl cursor-pointer items-center font-[Poppins] text-gray-800">
            <span className="w-32 h-32">
              <img className=" w-40" src={logo} alt="logo"></img>
            </span>

            <div
              onClick={openHadler}
              className={`text-gray-700 rounded-full ${
                isNav ? "hidden" : "block"
              } border-fuchsia-800 absolute border-2 shadow-2xl right-6
              top-4 bg-slate-300 h-8 w-8  flex md:hidden justify-center`}
            >
              <i className="fa fa-bars m-auto text-sm"></i>
            </div>
            <div
              onClick={closeHadler}
              className={`text-gray-700 rounded-full  ${
                isNav ? "block" : "hidden"
              } border-fuchsia-800 absolute border-2 shadow-2xl right-6
              top-4 bg-slate-300 h-8 w-8  flex md:hidden justify-center`}
            >
              <i className="fa fa-times m-auto text-sm"></i>
            </div>
          </div>

          {/* desktop nav */}

          <ul
            className={` left-0 pl-0 w-full  md:w-auto mt-2
             uppercase text-xs hidden md:flex text-left font-medium ${
               themeCtx.theme ? "text-fuchsia-900" : "text-white"
             }`}
          >
            {menus.map((menu, i) => {
              return (
                <li className="align-centers">
                  <a
                    href={menu.link}
                    className={` hover:border-b-2 ${
                      themeCtx.theme
                        ? "hover:text-gray-600"
                        : "hover:text-white"
                    } px-5 border-gray-900`}
                  >
                    {menu.name}
                  </a>
                </li>
              );
            })}
            |
            <li
              className={`align-centers px-5 ${
                themeCtx.theme ? "text-purple-700" : "text-white"
              } `}
            >
              <a href="tel:+234 7069275802">
                <i className="fa fa-phone"></i> +234 7069275802
              </a>
            </li>
          </ul>

          {/* mobile nav */}

          <ul
            className={`w-full h-96 duration-500 
             uppercase text-sm fixed rounded-br-full shadow-lg md:hidden flex flex-col text-left font-medium ${
               themeCtx.theme
                 ? "text-fuchsia-900 bg-slate-200"
                 : "text-white bg-slate-700"
             } ${
              isNav ? "opacity-1 translate-x-0" : "opacity-0 -translate-x-full"
            }`}
            style={{ marginTop: "440px" }}
          >
            {menus.map((menu, i) => {
              return (
                <li className="align-centers py-5 ml-4">
                  <a
                    href={menu.link}
                    className={`  ${
                      themeCtx.theme
                        ? "hover:text-gray-600"
                        : "hover:text-white"
                    } px-5 `}
                  >
                    {menu.name}
                  </a>
                </li>
              );
            })}

            <li
              className={`align-centers px-5 ml-4 ${
                themeCtx.theme ? "text-purple-700" : "text-white"
              } `}
            >
              <a href="tel:+234 7069275802">
                <i className="fa fa-phone"></i> +234 7069275802
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
