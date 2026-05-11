import React from 'react'
import topplant from "../assets/images/topplantimg.png"
import bag from "../assets/images/bag 1.png"
import rosegold from "../assets/images/Rose Gold Feminine Calligraphy Monogram Logo(20) 2.png"
import cornerTR from "../assets/images/Vector 5.png"
import cornerBL from "../assets/images/Vector 6.png"

const Trendyplants = () => {
    return (
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden flex flex-col items-center">


            <div className='mt-16 sm:mt-20 flex justify-center'>
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
                        Our Trending Plant
                    </h2>
                </div>
            </div>


            <div className="relative w-full pt-8 sm:pt-16">

                <div
                    className="rounded-[40px] sm:rounded-[70px] lg:rounded-[110px] p-[2px]"
                    style={{
                        background:
                            'linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.01) 40%, rgba(255,255,255,0.04) 60%, rgba(255, 255, 255, 0) 100%)',
                    }}
                >

                    <div
                        className="relative flex flex-col lg:flex-row items-center rounded-[40px] sm:rounded-[70px] lg:rounded-[110px] overflow-visible"
                        style={{
                            background: 'rgba(255, 255, 255, 0.08)',
                            backdropFilter: 'blur(40px)',
                            WebkitBackdropFilter: 'blur(40px)',
                            boxShadow:
                                'inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(255,255,255,0.08), 0 20px 60px rgba(0,0,0,0.25)',
                        }}
                    >


                        <div className="w-full lg:w-[45%] flex justify-center relative pt-10 lg:pt-0">
                            <img
                                src={topplant}
                                alt="Plant"
                                className="w-[220px] sm:w-[300px] md:w-[380px] lg:w-[500px] object-contain lg:-mt-28 drop-shadow-2xl"
                            />
                        </div>


                        <div className="w-full lg:w-[55%] px-6 sm:px-10 lg:px-14 py-10 sm:py-14 flex flex-col gap-4">

                            <h3 className="text-white text-2xl sm:text-3xl font-semibold leading-snug">
                                For Your Desks Decorations
                            </h3>

                            <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
                                I recently added a beautiful desk decoration plant
                                to my workspace, and it has made such a positive
                                difference!
                            </p>

                            <p className="text-white text-2xl font-semibold">
                                Rs. 599/-
                            </p>

                            <div className="flex items-center gap-3 flex-wrap">

                                <button className="px-6 sm:px-8 py-2.5 rounded-lg border border-white text-white text-base sm:text-lg ">
                                    Explore
                                </button>

                                <button className="w-11 h-11 rounded-lg border border-white flex items-center justify-center ">
                                    <img src={bag} alt="" className="w-5" />
                                </button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="relative w-full pt-14 sm:pt-24">

                <div
                    className="rounded-[40px] sm:rounded-[70px] lg:rounded-[110px] p-[2px]"
                    style={{
                        background:
                            'linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.01) 40%, rgba(255,255,255,0.04) 60%, rgba(255, 255, 255, 0) 100%)',
                    }}
                >

                    <div
                        className="relative flex flex-col-reverse lg:flex-row items-center rounded-[40px] sm:rounded-[70px] lg:rounded-[110px] overflow-visible"
                        style={{
                            background: 'rgba(255, 255, 255, 0.08)',
                            backdropFilter: 'blur(40px)',
                            WebkitBackdropFilter: 'blur(40px)',
                            boxShadow:
                                'inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(255,255,255,0.08), 0 20px 60px rgba(0,0,0,0.25)',
                        }}
                    >


                        <div className="w-full lg:w-[55%] px-6 sm:px-10 lg:px-14 py-10 sm:py-14 flex flex-col gap-4">

                            <h3 className="text-white text-2xl sm:text-3xl font-semibold leading-snug">
                                For Your Desks Decorations
                            </h3>

                            <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
                                The greenery adds a touch of nature and serenity
                                to my desk, making it feel more inviting and calming
                            </p>

                            <p className="text-white text-2xl font-semibold">
                                Rs. 399/-
                            </p>

                            <div className="flex items-center gap-3 flex-wrap">

                                <button className="px-6 sm:px-8 py-2.5 rounded-lg border border-white text-white text-base sm:text-lg ">
                                    Explore
                                </button>

                                <button className="w-11 h-11 rounded-lg border border-white flex items-center justify-center ">
                                    <img src={bag} alt="" className="w-5" />
                                </button>

                            </div>
                        </div>

                        <div className="w-full lg:w-[45%] flex justify-center relative pt-10 lg:pt-0">
                            <img
                                src={rosegold}
                                alt="Plant"
                                className="w-[220px] sm:w-[300px] md:w-[380px] lg:w-[520px] object-contain lg:-mt-28 drop-shadow-2xl"
                            />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Trendyplants