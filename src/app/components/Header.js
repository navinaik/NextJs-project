import React from "react";
import Link from "next/link";
const Header = () => {
  return (

      <div className="flex justify-center">
        <nav className="self-center fixed top-0 w-[100%] max-w-7xl shadow bg-black">
          <div className="flex justify-between items-center text-white">
            <h1 className="uppercase pl-5 py-4 text-lg font-sans font-bold">
              tailwind
            </h1>
            <ul className="hidden md:flex items-center text-[18px] font-semibold pl-32">
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link href= '/components/Home'>Home</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
              <Link href= '/components/About'>About</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
              <Link href= '/components/Products'>Products</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
              <Link href= '/components/services'>services</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
              <Link href= '/components/settings'>settings</Link>
              </li>
            </ul>
            <div className="text-white text-center text-base pr-5 hidden lg:inline-flex">
              {" "}
              <a
                href="#"
                className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500"
              >
                <i className="fa fa-twitter"></i>
              </a>{" "}
              <a
                href="#"
                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
              >
                <i className="fa fa-instagram"></i>
              </a>{" "}
              <a
                href="#"
                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
              >
                <i className="fa fa-facebook"></i>
              </a>{" "}
              <a
                href="#"
                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
              >
                <i className="fa fa-google"></i>
              </a>{" "}
              <a
                href="#"
                className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
              >
                <i className="fa fa-linkedin"></i>
              </a>{" "}
            </div>{" "}
            <button className="block p-3 mx-10 md:hidden hover:bg-black rounded-xl group">
              <div className="w-5 my-[3px] h-[3px] bg-white mb-[2px]"></div>
              <div className="w-5 my-[3px] h-[3px] bg-white mb-[2px]"></div>
              <div className="w-5 my-[3px] h-[3px] bg-white"></div>
              <div className="absolute top-0 -right-full opacity-0 h-screen w-[60%] border bg-black group-focus:right-0 group-focus:opacity-100 transition-all ease-in duration-300 ">
                <ul className="flex flex-col items-center text-[18px] pt-[60px]">
                  <li className="hover:border border-white py-4 px-6 w-full">
                    <a href="#">Home</a>
                  </li>
                  <li className="hover:border border-white py-4 px-6 w-full">
                    <a href="#">Contacts</a>
                  </li>
                  <li className="hover:border border-white py-4 px-6 w-full">
                    <a href="#">Services</a>
                  </li>
                  <li className="hover:border border-white py-4 px-6 w-full">
                    <a href="#">About</a>
                  </li>
                  <li className="hover:border border-white py-4 px-6 w-full">
                    <a href="#">Pricing</a>
                  </li>
                </ul>
              </div>
            </button>
          </div>
        </nav>

      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
    </div>
  );
};

export default Header;
