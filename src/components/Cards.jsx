import React from 'react';

const Cards = () => {
    return (
        <div className="bg-[#5e1c1c] text-white font-serif p-8 flex flex-col items-center">
            <h1 className="text-4xl mb-6">Ready to level up?</h1>

            <button className="bg-[#ffd700] text-black py-2 px-4 rounded mb-4">
                GET YOUR PROFILE EVALUATED →
            </button>

            <p className="mb-8">NEXT COHORT STARTS 5TH JANUARY 2024</p>

            <div className="flex flex-wrap justify-center gap-8">
                <InfoCard title="Pricing">
                    <h3 className="text-2xl mb-2">Rs. 2.95L + 18% GST</h3>
                    <p className="text-sm mb-4">Early Bird Offer - Rs 15,000/- waiver until 31st Oct 2023</p>
                    <h4 className="font-bold mb-2">WHAT YOU GET</h4>
                    <ul className="list-none">
                        <ListItem>Access to the Marketing and Growth Program</ListItem>
                        <ListItem>18+ learning sprints led by industry experts</ListItem>
                        <ListItem>Weekly office hours with Industry Leaders</ListItem>
                    </ul>
                </InfoCard>

                <InfoCard title="Eligibility">
                    <h4 className="font-bold mb-2">YOU ARE ELIGIBLE IF YOU</h4>
                    <ul className="list-none">
                        <ListItem>Have 1-5 years of work experience with excellent communication skills</ListItem>
                        <ListItem>Have experience in at least one marketing channel such as content, social media, performance marketing etc.</ListItem>
                        <ListItem>Have worked in sales, PR, media, advertising, or marketing</ListItem>
                    </ul>
                </InfoCard>

                <InfoCard title="Admission Process">
                    <ul className="list-none text-sm">
                        <ListItem>
                            <span className="font-bold text-sm mr-3">GET YOUR PROFILE EVALUATED</span>
                            Our advisors will help you understand if the program aligns with your career goals.
                        </ListItem>
                        <ListItem>
                            <span className="font-bold text-sm mr-3">SUBMIT YOUR APPLICATION</span><br />
                            Personal interview for shortlisted candidates to evaluate how you would fit in the Stoa community.
                        </ListItem>
                        <ListItem>
                            <span className="font-bold text-sm mr-3">PROGRAM WALKTHROUGH</span><br />
                            If selected, go through all the program details with our team.
                        </ListItem>
                    </ul>
                </InfoCard>
            </div>
        </div>
    );
};

const InfoCard = ({ title, children }) => {
    return (
        <div className="bg-white text-[#5e1c1c] p-6 rounded-lg w-80">
            <h2 className="text-2xl mb-4">{title}</h2>
            {children}
        </div>
    );
};

const ListItem = ({ children }) => {
    return (
        <li className="mb-2 flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            {children}
        </li>
    );
};

export default Cards;