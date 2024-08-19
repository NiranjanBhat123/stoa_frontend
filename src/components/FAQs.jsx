import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQs = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const faqItems = [
        {
            question: "What are the outcomes for participants upon completing this program?",
            answer: "Upon completing this program, participants can anticipate a transformative set of outcomes, including an enriched skill set spanning marketing and growth strategies, leading end-to-end marketing projects, potential career advancement into managerial or leadership roles, specialization in specific marketing domains, and a deep understanding of modern marketing. Networking opportunities and the development of essential soft skills and job placement assistance, coupled with hands-on experience in real-world projects, further enhance graduates' readiness for diverse marketing and growth roles."
        },
        {
            question: "Do you guarantee placements? What kind of job placement assistance is provided?",
            answer: 'No, we dont guarantee placements. Candidates get comprehensive career services encompassing guidance on resume building and case interview preparation, soft skills development, including crafting an elevator pitch, writing compelling cold emails, and effective networking. These sessions are meticulously designed to enhance participants job readiness and equip them with the tools and skills needed to secure relevant job opportunities. This comprehensive approach underscores the programs commitment to supporting participants in their career progression. To successfully complete the program, candidates must secure approval for 8 assignments.Additionally, those seeking connections with potential employers for job opportunities are required to pass the Program Charter.'
        },
        {
            question: "What is the Stoa Charter? When does it take place?",
            answer: "The Stoa Charter is a certification of competence. The Stoa Charter is awarded to those who demonstrate mastery in applying frameworks to solve substantial business problems. It is the highest level of academic honour awarded within the Stoa Programs, granted only to a few outstanding candidates within any cohort. The Charter is awarded upon successfully defending proposed solutions to a business problem, before a jury comprising of executives at leading firms. It is conducted at the end of the program."
        },
        {
            question: "How is it different than other marketing and growth programs?",
            answer: "The candidates who graduate from this program are uniquely placed to lead modern marketing and growth strategies in new age companies and startups. It is firmly grounded in modern marketing principles, data-driven decision-making, and customer-centric strategies, —providing participants with a contemporary approach to achieve business outcomes and drive growth. Practical learning through real-world projects enhances their hands-on experience. Moreover, a structured Careers Week format for job placement support, tailored for startup jobs, and networking opportunities with industry experts further set this program apart."
        },
        {
            question: "Is there an income share agreement or a no-cost EMI?",
            answer: "We currently do not offer an income share agreement or a no-cost EMI option. However, we have partnered with reputed loan companies that provide education loans with EMIs starting from three months to forty-two months."
        }
    ];

    return (
        <div className="bg-[#f5efe0] p-8">
            <h1 className="text-4xl text-[#5e1c1c] font-serif mb-8 text-center ">FAQs</h1>
            {faqItems.map((item, index) => (
                <Accordion
                    key={index}
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                    className="mb-4 border-b border-gray-300"
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon className="text-[#5e1c1c]" />}
                        className="font-serif text-lg"
                    >
                        {item.question}
                    </AccordionSummary>
                    <AccordionDetails className="font-sans text-base">
                        {item.answer}
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default FAQs;