import React from 'react'
import card1 from '../assets/images/customercard.png'
import avatar from "../assets/images/img2.jpg"
import avatar2 from "../assets/images/img3.jpg"
import cornerTR from "../assets/images/Vector 5.png"
import cornerBL from "../assets/images/Vector 6.png"

const reviews = [
    {
        name: "Shelly Russel",
        rating: 4,
        text: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
        card: card1,
        avatar: avatar,
    },
    {
        name: "Lula Rolfson",
        rating: 4,
        text: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
        card: card1,
        avatar: avatar2,
    },
    {
        name: "Carol Huels",
        rating: 4,
        text: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
        card: card1,
        avatar: avatar,
    },
]

const CustomerReview = () => {
    return (
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14 py-14 sm:py-16 flex flex-col items-center gap-12 overflow-hidden">

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
                        Customer Review
                    </h2>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 w-full place-items-center">

                {reviews.map((review, index) => (

                    <div
                        key={index}
                        className="relative w-full max-w-[380px] rounded-[35px] overflow-hidden"
                    >


                        <div
                            className="rounded-[35px] p-[1.5px]"
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.03))"
                            }}
                        >

                            <div
                                className="relative min-h-[280px] rounded-[35px] p-6 sm:p-7 flex flex-col gap-5"
                                style={{
                                    background: "rgba(255,255,255,0.06)",
                                    backdropFilter: "blur(30px)",
                                    WebkitBackdropFilter: "blur(30px)",
                                    boxShadow:
                                        "inset 0 1px 0 rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.25)"
                                }}
                            >


                                <div className="flex items-center gap-4">

                                    <div className="w-14 h-14 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
                                        <img
                                            src={review.avatar}
                                            alt={review.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div>

                                        <h3 className="text-white text-base sm:text-lg font-semibold">
                                            {review.name}
                                        </h3>


                                        <div className="flex gap-1 mt-1">

                                            <p className='text-yellow-400 text-xs'>
                                                ★★★★★
                                            </p>

                                        </div>
                                    </div>
                                </div>

                                <p className="text-white/70 text-sm sm:text-[15px] leading-7">
                                    {review.text}
                                </p>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CustomerReview