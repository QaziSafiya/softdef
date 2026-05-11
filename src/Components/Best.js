import React, { useState } from 'react'
import plant1 from '../assets/images/bestimg.png'
import cornerTR from "../assets/images/Vector 5.png"
import cornerBL from "../assets/images/Vector 6.png"
import right from "../assets/images/right.png"
import left from "../assets/images/left.png"


const Best = () => {

    return (
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 py-14 sm:py-16 flex flex-col items-center gap-10 overflow-hidden">


            <div className='mt-10 sm:mt-16 flex justify-center'>
                <div className="relative inline-flex items-center px-4 py-2">

                    <img
                        src={cornerTR}
                        alt=""
                        className="absolute bottom-0 left-0 w-7 h-7 sm:w-10 sm:h-10"
                    />

                    <img
                        src={cornerBL}
                        alt=""
                        className="absolute top-0 right-0 w-7 h-7 sm:w-10 sm:h-10"
                    />

                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
                        Our Best O2
                    </h2>
                </div>
            </div>


            <div
                className="w-full rounded-[35px] sm:rounded-[45px] overflow-hidden p-[1.5px]"
                style={{
                    background:
                        "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.03))"
                }}
            >

                <div
                    className="rounded-[35px] sm:rounded-[45px] px-6 sm:px-10 lg:px-14 py-10 lg:py-12 flex flex-col lg:flex-row items-center gap-10"
                    style={{
                        background: 'rgba(255,255,255,0.06)',
                        backdropFilter: 'blur(30px)',
                        WebkitBackdropFilter: 'blur(30px)',
                        boxShadow:
                            'inset 0 1px 0 rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.25)',
                    }}
                >


                    <div className="w-full lg:w-[65%] flex justify-center">

                        <img
                            src={plant1}
                            alt="plant"
                            className="w-[230px] sm:w-[320px] md:w-[480px] lg:w-[450px] object-contain "
                        />

                    </div>


                    <div className="w-full lg:w-[55%] flex flex-col gap-5">

                        <h3 className="text-white text-2xl sm:text-3xl font-semibold leading-snug">
                            Fresh Air Starts With The Right Plant
                        </h3>

                        <p className="text-white/70 text-sm sm:text-[15px] md:text-base leading-7">
                            Indoor plants are more than just decoration — they actively improve the quality of air in your home or office environment.
                        </p>

                        <p className="text-white/70 text-sm sm:text-[15px] md:text-base leading-7">
                            Choosing the right O2 plant can make a significant difference in how fresh and clean your living space feels every single day.
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-4">

                            <button className="w-fit px-7 py-3 rounded-xl border border-white/30 text-white text-sm sm:text-base hover:bg-white/10 transition-all">
                                Explore
                            </button>


                            <div className="flex items-center gap-5">

                                <button

                                    className="w-4 h-4  flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
                                >
                                    <img src={left} alt="" />
                                </button>

                                <span className="text-white/70 text-sm sm:text-base">

                                    <span className="text-white/30">
                                        0/04
                                    </span>
                                </span>

                                <button

                                    className="w-4 h-4  flex items-center justify-center text-white/70 ">

                                    <img src={right} alt="" />
                                </button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Best