import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Pic1 from '../assets/pics/pic1.jpeg';
import Pic2 from '../assets/pics/pic2.jpeg';
import Pic3 from '../assets/pics/pic3.jpeg';
import Pic4 from '../assets/pics/pic4.png';

const Slider = () => {
    const profiles = [
        { name: 'John Smith', company: 'Barclays', imgSrc: Pic1 },
        { name: 'Emma Watson', company: 'BBC', imgSrc: Pic2 },
        { name: 'David Smith', company: 'JP Morgan', imgSrc: Pic3 },
        { name: 'Adele Adkins', company: 'Sony Music', imgSrc: Pic4 },
    ];

    return (
        <div className="bg-[#f3e3c4] py-12">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                speed={4000}
                breakpoints={{
                    640: {
                        slidesPerView: 3, 
                    },
            }}
            >
                {profiles.map((profile, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white rounded-lg shadow-lg p-6 text-center border-2 border-white h-full flex flex-col justify-center">
                            <div className="mb-4">
                                <img
                                    src={profile.imgSrc}
                                    alt={profile.name}
                                    className="w-24 h-24 rounded-full mx-auto"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-black" style={{ fontFamily: 'Cursive, serif' }}>
                                {profile.name}
                            </h3>
                            <div className="text-lg font-medium text-black" style={{ fontFamily: 'Georgia, serif' }}>
                                {profile.company}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;


