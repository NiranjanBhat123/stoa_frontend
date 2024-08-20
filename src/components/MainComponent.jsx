// import React from 'react';
// import Video from '../assets/video.mp4';


// const MainContent = () => {
//     return (
//         <div className="bg-[#f3e3c4] min-h-screen pt-20">
//             <div className="container mx-auto px-4 py-12">
//                 <div className="flex flex-col lg:flex-row items-start">
//                     <div className="lg:w-1/2 lg:pr-12">
//                         <h1 className="text-4xl lg:text-5xl font-serif text-[#9B2C2C] mb-8 leading-tight">
//                             Accelerate your career to bigger, strategic roles in marketing and growth
//                         </h1>
//                         <ul className="space-y-6 mb-8">
//                             <ListItem
//                                 title="Master modern Marketing and Growth fundamentals"
//                                 description="Build your marketing portfolio by solving real world cases"
//                             />
//                             <ListItem
//                                 title="Win friends and influence people"
//                                 description="Join a community of 1000+ active professionals"
//                             />
//                             <ListItem
//                                 title="Earn the Stoa Charter"
//                                 description="Demonstrate your competence"
//                             />
//                             <ListItem
//                                 title="Access Career Services"
//                                 description="Get job ready and placement assistance"
//                             />
//                         </ul>
//                         <button className="bg-[#9B2C2C] text-white px-6 py-3 rounded-md hover:bg-[#7C2424] transition-colors duration-300 flex items-center">
//                             GET YOUR PROFILE EVALUATED
//                             <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                             </svg>
//                         </button>
//                         <p className="text-amber-700 text-sm mt-2">NEXT COHORT STARTS 5TH JANUARY 2024</p>
//                     </div>
//                     <div className="lg:w-1/2 mt-12 lg:mt-0">
//                         <div className="relative rounded-lg overflow-hidden">
//                             <video
//                                 className="w-full h-auto max-w-full rounded-lg"
//                                 controls
//                                 style={{ aspectRatio: '16/9' }} 
//                             >
//                                 <source src={Video} type="video/mp4" />
//                                 Your browser does not support the video tag.
//                             </video>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="w-4/5 mx-auto">
//                 <div class="h-1 bg-black"></div>
//             </div>

//         </div>
//     );
// };

// const ListItem = ({ title, description }) => (
//     <li>
//         <h3 className="text-xl font-semibold text-[#9B2C2C]">{title}</h3>
//         <p className="text-gray-600">{description}</p>
//     </li>
// );

// export default MainContent;



import React from 'react';
import Video from '../assets/video.mp4';

const MainContent = () => {
    return (
        <div className="bg-[#f3e3c4] min-h-screen pt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row items-start">
                    <div className="lg:w-1/2 lg:pr-12">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#9B2C2C] mb-8 leading-tight">
                            Accelerate your career to bigger, strategic roles in marketing and growth
                        </h1>
                        <ul className="space-y-4 sm:space-y-6 mb-8">
                            <ListItem
                                title="Master modern Marketing and Growth fundamentals"
                                description="Build your marketing portfolio by solving real world cases"
                            />
                            <ListItem
                                title="Win friends and influence people"
                                description="Join a community of 1000+ active professionals"
                            />
                            <ListItem
                                title="Earn the Stoa Charter"
                                description="Demonstrate your competence"
                            />
                            <ListItem
                                title="Access Career Services"
                                description="Get job ready and placement assistance"
                            />
                        </ul>
                        <button className="bg-[#9B2C2C] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-[#7C2424] transition-colors duration-300 flex items-center">
                            GET YOUR PROFILE EVALUATED
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                        <p className="text-amber-700 text-xs sm:text-sm mt-2">NEXT COHORT STARTS 5TH JANUARY 2024</p>
                    </div>
                    <div className="lg:w-1/2 mt-8 sm:mt-12 lg:mt-0">
                        <div className="relative rounded-lg overflow-hidden">
                            <video
                                className="w-full h-auto max-w-full rounded-lg"
                                controls
                                style={{ aspectRatio: '16/9' }} 
                            >
                                <source src={Video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-4/5 mx-auto">
                <div className="h-1 bg-black"></div>
            </div>
        </div>
    );
};

const ListItem = ({ title, description }) => (
    <li>
        <h3 className="text-lg sm:text-xl font-semibold text-[#9B2C2C]">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </li>
);

export default MainContent;
