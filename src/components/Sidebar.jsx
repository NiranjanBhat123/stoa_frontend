import React, { useState, useEffect } from 'react';
import { FaInfoCircle, FaBook, FaCalendarAlt, FaChalkboardTeacher, FaBriefcase } from 'react-icons/fa'; // Import icons
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Section = ({ id, title, children, icon }) => (
    <div id={id} className="py-16 mt-12 bg-[#f3e3c4]">
        <h2 className="text-3xl font-extrabold mb-4 flex items-center">
            {icon && <span className="mr-2">{icon}</span>}
            {title}
        </h2>
        <div className="text-lg font-serif mb-4">
            {children}
        </div>
    </div>
);

const Sidebar = () => {
    const sections = [
        { id: 'overview', title: 'Program Overview', subtitle: 'Learn the Fundamentals of Modern marketing to lead end to end marketing and growth projects', content: 'The program is designed to equip participants with skill set spanning modern marketing and growth strategies and prepare them to lead end-to-end marketing projects. It starts with a 3-day offline induction in Bengaluru. During the 6 months of the program, youll spend most of your time learning via 18+ sprints and practical workshops.', icon: <FaInfoCircle /> },
        { id: 'curriculum', title: 'Curriculum', subtitle: '20+ sprints, countless skills', content: "Each sprint is designed to help you pick up skills that you can apply at your work. Learn through a mix of individual and team-based modes.", icon: <FaBook /> },
        { id: 'schedule', title: 'Schedule', subtitle: 'Schedule suitable for working professionals', content: 'We get it. Work and life gets busy. That’s why the Stoa Program is designed to be light on the weekdays and gives you the flexibility to schedule your own learning.', icon: <FaCalendarAlt /> },
        { id: 'faculty', title: 'Faculty', subtitle: 'Learn from experts with real-world experience', icon: <FaChalkboardTeacher /> },
        { id: 'career-services', title: 'Career Services', subtitle: 'Personalised career prep, job readiness, and company connects', content: 'Career Services sprints are accessible to all. Placement support is unlocked for those who get 8 assignments approved + clear the Charter. Access to hiring partners, company connects, and career drives post clearing the Charter.', icon: <FaBriefcase /> },
    ];

    const [activeSection, setActiveSection] = useState('overview');

    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
                const { offsetTop, offsetHeight } = element;
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    setActiveSection(section.id);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="flex justify-center mt-8">

            <div className="w-1/4 sticky top-20 self-start bg-[#f3e3c4] p-4">
                <ul className="space-y-4">
                    {sections.map((section) => (
                        <li key={section.id}>
                            <a
                                href={`#${section.id}`}
                                className={`block py-2 text-lg ${activeSection === section.id
                                    ? 'text-maroon font-bold underline'
                                    : 'text-gray-500'
                                    }`}
                            >
                                <span className="inline-flex items-center">
                                    {section.icon}
                                    <span className="ml-2">{section.title}</span>
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>


            <div className="w-1/2 pl-8 font-serif">
                {sections.map((section) => (
                    <Section key={section.id} id={section.id} title={section.title} icon={section.icon}>
                        <h1 className="text-2xl font-bold text-[#9B2C2C] mb-4">{section.subtitle}</h1>
                        <p className="text-base text-maroon mb-4">{section.content}</p>


                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`${section.id}-content`}
                                id={`${section.id}-header`}
                            >
                                <span>View details</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus aut nesciunt numquam culpa vitae, animi veniam. Quaerat maxime voluptates minima quis nesciunt veniam commodi quo cupiditate odio ea eum, assumenda laboriosam atque quia eligendi dolor laudantium voluptatibus nam aperiam necessitatibus modi animi corrupti! Inventore atque aliquid, doloribus repellendus laboriosam fugit, praesentium tempora facere incidunt adipisci tempore obcaecati error! Blanditiis hic aut dolorum quaerat doloremque voluptate molestiae harum quisquam impedit magnam repellendus eligendi exercitationem suscipit id accusamus ipsa reprehenderit ipsum, fugiat, perferendis deserunt autem obcaecati consequuntur a. Recusandae ipsum consequuntur ducimus sunt illum delectus accusantium! Tenetur quam similique rem inventore sunt!</p>
                            </AccordionDetails>
                        </Accordion>
                    </Section>
                ))}
            </div>

        </div>
    );
};

export default Sidebar;
