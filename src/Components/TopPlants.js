import React from 'react'
import plant1 from '../assets/images/plant1.png'
import plant2 from '../assets/images/plant2.png'
import plant3 from '../assets/images/plant3.png'
import plant4 from "../assets/images/plant4.png"
import plant5 from "../assets/images/plant5.png"
import bag from "../assets/images/bag 1.png"
import cornerTR from "../assets/images/Vector 5.png"
import cornerBL from "../assets/images/Vector 6.png"

const plants = [
    {
        name: "Aglaonema plant",
        desc: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
        price: "Rs. 300/-",
        img: plant1,
    },
    {
        name: "Plantain Lilies",
        desc: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
        price: "Rs. 380/-",
        img: plant2,
    },
    {
        name: "Cactus",
        desc: "It is known for their ability to thrive in arid environments",
        price: "Rs. 259/-",
        img: plant3,
    },
    {
        name: "Swiss cheese Plant",
        desc: "It is a popular tropical houseplant known for its distinctive, perforated leaves",
        price: "Rs. 400/-",
        img: plant4,
    },
    {
        name: "Sansevieria plant",
        desc: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
        price: "Rs. 450/-",
        img: plant5,
    },
    {
        name: "Agave plant",
        desc: "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
        price: "Rs. 359/-",
        img: plant5,
    },
]

const TopPlants = () => {
    return (
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 py-14 sm:py-16 flex flex-col items-center gap-10 overflow-hidden">

            {/* Heading */}
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
                        Our Top Plants
                    </h2>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 w-full place-items-center">

                {plants.map((plant, index) => (

                    <div
                        key={index}
                        className="relative overflow-hidden rounded-3xl w-full max-w-[420px] "
                    >

                        <img
                            src={plant.img}
                            alt={plant.name}
                            className="w-full h-full object-cover block"
                        />

                        <div className="absolute bottom-6 left-0 right-0 px-5 sm:px-7 md:px-8 ">

                            <div className=" p-6 mt-12  md:p-8 ">

                                <h3 className="text-white text-lg sm:text-xl font-semibold leading-snug ">
                                    {plant.name}
                                </h3>

                                <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed mt-2 line-clamp-3">
                                    {plant.desc}
                                </p>

                                <div className="flex items-center justify-between mt-4">

                                    <span className="text-white font-semibold text-sm sm:text-base">
                                        {plant.price}
                                    </span>

                                    <button
                                        className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/20 hover:bg-white/10 transition-all"
                                    >
                                        <img
                                            src={bag}
                                            className='w-4 sm:w-5'
                                            alt=""
                                        />
                                    </button>

                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopPlants