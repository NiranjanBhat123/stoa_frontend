import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {
  FaBuilding,
  FaArrowDown,
  FaHeartbeat,
  FaIndustry,
  FaRocket,
  FaCog,
  FaLightbulb,
  FaTree,
  FaUserTie,
  FaAward
} from 'react-icons/fa';
import Pic1 from '../assets/pics/pic1.jpeg';
import Pic2 from '../assets/pics/pic2.jpeg';
import Pic3 from '../assets/pics/pic3.jpeg';
import Pic4 from '../assets/pics/pic4.png';
import Pic5 from '../assets/pics/pic5.webp';
import Pic6 from '../assets/pics/pic6.jpeg';
import Pic7 from '../assets/pics/pic7.jpeg';
import Pic8 from '../assets/pics/pic8.jpeg';
import Pic9 from '../assets/pics/pic9.jpeg';
import Pic10 from '../assets/pics/pic10.jpeg';

const Slider = () => {
    const profiles = [
        { name: 'Alex Johnson', pic: Pic1, preStoa: 'Tech Innovations', postStoa: 'Health Plus', nextCompany: 'FaIndustry', nextCompanyName: 'Industry Leaders', newRole: 'Senior Developer' },
        { name: 'Ryan Smith', pic: Pic2, preStoa: 'Green Energy Co', postStoa: 'EcoSolutions', nextCompany: 'FaRocket', nextCompanyName: 'Rocket Labs', newRole: 'Product Manager' },
        { name: 'Michael Chen', pic: Pic3, preStoa: 'Data Systems Inc', postStoa: 'AI Insights', nextCompany: 'FaCog', nextCompanyName: 'Tech Innovators', newRole: 'Data Scientist' },
        { name: 'David Brown', pic: Pic4, preStoa: 'Global Finance', postStoa: 'FinTech Pro', nextCompany: 'FaLightbulb', nextCompanyName: 'Bright Minds', newRole: 'Financial Analyst' },
        { name: 'Raj Patel', pic: Pic5, preStoa: 'Smart Devices', postStoa: 'IoT Connect', nextCompany: 'FaTree', nextCompanyName: 'GreenTech', newRole: 'IoT Specialist' },
        { name: 'John Davis', pic: Pic6, preStoa: 'Marketing Solutions', postStoa: 'Brand Builders', nextCompany: 'FaUserTie', nextCompanyName: 'Corporate Solutions', newRole: 'Marketing Strategist' },
        { name: 'Daniel Lee', pic: Pic7, preStoa: 'Cybersecurity Experts', postStoa: 'SafeNet Solutions', nextCompany: 'FaAward', nextCompanyName: 'Award Winners', newRole: 'Security Consultant' },
        { name: 'James Wilson', pic: Pic8, preStoa: 'Innovative Robotics', postStoa: 'Robotics World', nextCompany: 'FaBuilding', nextCompanyName: 'Building Innovators', newRole: 'Robotics Engineer' },
        { name: 'Ethan Harris', pic: Pic9, preStoa: 'Financial Advisors', postStoa: 'Invest Smart', nextCompany: 'FaRocket', nextCompanyName: 'Rocket Labs', newRole: 'Investment Advisor' },
        { name: 'Lucas Martinez', pic: Pic10, preStoa: 'Digital Media', postStoa: 'Content Creators', nextCompany: 'FaHeartbeat', nextCompanyName: 'Health Media', newRole: 'Content Creator' }
    ];

    const iconMap = {
        FaBuilding: FaBuilding,
        FaRocket: FaRocket,
        FaCog: FaCog,
        FaLightbulb: FaLightbulb,
        FaTree: FaTree,
        FaUserTie: FaUserTie,
        FaAward: FaAward,
        FaIndustry: FaIndustry,
        FaHeartbeat: FaHeartbeat,
    };

    const colorMap = {
        FaBuilding: 'text-blue-500',
        FaRocket: 'text-red-500',
        FaCog: 'text-gray-500',
        FaLightbulb: 'text-yellow-500',
        FaTree: 'text-green-500',
        FaUserTie: 'text-purple-500',
        FaAward: 'text-orange-500',
        FaIndustry: 'text-teal-500',
        FaHeartbeat: 'text-pink-500'
    };

    return (
        <div className="bg-[#f3e3c4] py-12">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={5}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                speed={4000}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                }}
            >
                {profiles.map((profile, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white rounded-lg shadow-lg p-6 text-left border-2 border-white h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-dancing-script text-black mb-2">{profile.name}</h3>
                                <img
                                    src={profile.pic}
                                    alt={profile.name}
                                    className="w-16 h-16 rounded-full mb-4"
                                />
                            </div>
                            <div>
                                <p className="text-gray-600 mb-1">PRE STOA</p>
                                <div className="flex items-center mb-2">
                                    <FaBuilding className="text-blue-500 mr-2" />
                                    <span className="font-semibold">{profile.preStoa}</span>
                                </div>
                                <FaArrowDown className="text-red-500 mb-2" />
                                <p className="text-gray-600 mb-1">POST STOA</p>   
                                <div className="flex items-center mb-2">
                                    {React.createElement(iconMap[profile.nextCompany], { className: `${colorMap[profile.nextCompany]} mr-2` })}
                                    <span className="font-semibold">{profile.nextCompanyName}</span>
                                </div>
                                <p className="text-gray-600 mb-1">NEW ROLE</p>
                                <div className="flex items-center">
                                    <span className="font-serif">{profile.newRole}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
