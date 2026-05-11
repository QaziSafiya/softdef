import React from "react";
import logo from "../assets/images/Group 35.png";
import navitems from "../assets/images/Group 2.png";
import search from "../assets/images/search.png";
import menu from "../assets/images/Line 2.png";
import bag from "../assets/images/bag 1.png";

const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-between px-4 sm:px-6 md:px-10 py-5 absolute top-0 left-0 z-50">


            <div className=" w-[160px] h-[40px] sm:w-[190px] sm:h-[40px] md:w-[225px] md:h-[48px]">
                <img src={logo} alt="logo" className="" />
            </div>
            <div className="hidden md:flex w-[531px] h-[35px] justify center">
                <ul className="hidden md:flex items-center gap-10">
                    <li className="text-white hover:text-white text-xl   tracking-wide cursor-pointer transition-colors" style={{ fontFamily: "'Indie Flower', cursive" }}>
                        Home
                    </li>
                    <li
                        className="relative flex items-center gap-1 text-white hover:text-white text-xl  cursor-pointer" style={{ fontFamily: "'Indie Flower', cursive" }}

                    >Plant Type

                    </li>
                    <li className="text-white hover:text-white text-xl   cursor-pointer " style={{ fontFamily: "'Indie Flower', cursive" }}>
                        More
                    </li>
                    <li className="text-white hover:text-white text-xl  cursor-pointer " style={{ fontFamily: "'Indie Flower', cursive" }}>
                        Contact
                    </li>
                </ul>
            </div>

            <div className=" flex  justify-between  gap-4 sm:gap-6 md:gap-8 items-center">

                <img
                    src={search}
                    alt="search"
                    className="w-5 sm:w-4 cursor-pointer"
                />
                <img
                    src={bag}
                    alt="bag"
                    className="w-5 sm:w-4 cursor-pointer"
                />
                <img
                    src={menu}
                    alt="menu"
                    className="w-5 sm:w-4 cursor-pointer"
                />
            </div>

        </div>
    );
};

export default Navbar;