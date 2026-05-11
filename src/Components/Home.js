import React from 'react'
import Homeimg from '../assets/images/homeimg1.png'
import avtar from "../assets/images/img3.jpg"
import Trendyplants from './Trendyplants'
import bgImage from "../assets/images/bg-tree.png"
import strock from "../assets/images/strock.png"

const Home = () => {

    return (
        <div
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >

            <div className='w-full min-h-screen grid grid-cols-1 md:grid-cols-2 px-6 md:px-14 pt-28 overflow-hidden'>

                <div className='flex flex-col justify-center gap-6 py-20'>

                    <h1 className='text-[55px] md:text-[80px] lg:text-[95px] text-white/60 font-semibold leading-none'>
                        Earth's Exhale
                    </h1>

                    <p className='text-white/70 text-sm md:text-base max-w-[500px]'>
                        "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
                    </p>
                    <div className='flex items-center gap-4 mt-3'>

                        <button className='px-6 py-2 border border-white rounded-lg text-white'>
                            Buy Now
                        </button>

                        <button className='w-10 h-10 border border-white rounded-full flex justify-center items-center'>
                            <img src={strock} alt="" className='w-3 h-3' />
                        </button>

                        <p
                            className='text-white text-lg tracking-wide'
                            style={{ fontFamily: "'Indie Flower', cursive" }}
                        >
                            Live Demo...
                        </p>

                    </div>

                    <div
                        className='w-[290px] mt-8 p-4 rounded-2xl flex flex-col gap-3'
                        style={{
                            background: 'rgba(255,255,255,0.07)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >

                        <div className='flex items-center gap-3'>

                            <div className='w-10 h-10 rounded-full overflow-hidden'>
                                <img
                                    src={avtar}
                                    alt=""
                                    className='w-full h-full object-cover'
                                />
                            </div>

                            <div>
                                <h3 className='text-white text-sm'>
                                    Ronnie Hamill
                                </h3>

                                <p className='text-yellow-400 text-xs'>
                                    ★★★★★
                                </p>
                            </div>

                        </div>

                        <p className='text-white/80 text-xs leading-5'>
                            I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
                        </p>

                    </div>

                </div>


                <div className='relative flex justify-center md:justify-end'>

                    <div className='w-[320px] sm:w-[400px] md:w-[520px] absolute -top-16 md:-top-32'>
                        <img
                            src={Homeimg}
                            alt=""
                            className='w-full object-cover'
                        />
                    </div>

                </div>

            </div>

            <Trendyplants />

        </div>
    )
}

export default Home