import React from 'react'
import logo from '../assets/images/Group 35.png'

const Footer = () => {
    return (
        <footer className="w-full px-6 md:px-14 py-16 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col gap-5 ">
                    <div className=" w-[160px] h-[70px] sm:w-[190px] sm:h-[40px] md:w-[225px] md:h-[48px]">
                        <img src={logo} alt="vision" className="-ml-9" />
                    </div>
                    <p className="text-white  font-inter text-sm leading-relaxed max-w-[260px]">
                        "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
                    </p>
                    <div className="flex items-center gap-6 mt-4">
                        <span
                            className="text-white font-inter text-sm font-medium cursor-pointer hover:text-white transition-colors">
                            FB
                        </span>
                        <span
                            className="text-white font-inter text-sm font-medium cursor-pointer hover:text-white transition-colors">
                            TW
                        </span>
                        <span
                            className="text-white font-inter text-sm font-medium cursor-pointer hover:text-white transition-colors">
                            LI
                        </span>
                    </div>
                </div>


                <div className="flex flex-col gap-5">
                    <h4 className="text-white font-inter font-semibold text-base">
                        Quick Link's
                    </h4>
                    <ul className="flex flex-col gap-3">
                        <li
                            className="text-white font-inter text-sm cursor-pointer hover:text-white transition-colors">
                            Home
                        </li>
                        <li
                            className="text-white font-inter text-sm cursor-pointer hover:text-white transition-colors">
                            Type of Plants
                        </li>
                        <li
                            className="text-white font-inter text-sm cursor-pointer hover:text-white transition-colors">
                            Contact
                        </li>
                        <li
                            className="text-white font-inter text-sm cursor-pointer hover:text-white transition-colors">
                            Privacy
                        </li>

                    </ul>
                </div>

                <div className="flex flex-col gap-5">
                    <h4 className="text-white font-inter font-semibold text-base">
                        For Every Update
                    </h4>
                    <div className="flex items-center overflow-hidden rounded-lg"
                        style={{ border: '1px solid rgba(255,255,255,0.25)' }}>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="flex-1 bg-transparent px-4 py-3 text-white/60 font-inter text-sm outline-none placeholder:text-white/40"
                        />
                        <button className="px-2 py-3 text-black bg-white  font-inter text-sm font-sm"
                            style={{ borderLeft: '1px solid rgba(255,255,255,0.25)' }}>
                            SUBSCRIBE
                        </button>
                    </div>
                </div>

            </div>


            <div className="flex justify-end mt-16">
                <p className="text-white font-inter text-sm">
                    FloraVision © all right reserve
                </p>
            </div>

        </footer>
    )
}

export default Footer