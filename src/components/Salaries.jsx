import React from 'react';

const SalaryCard = ({ value, label }) => (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-2">{value}</h2>
        <p className="text-gray-600 uppercase text-sm">{label}</p>
    </div>
);

const Salaries = () => {
    return (
        <div className="bg-[#f3e3c4] p-8 md:p-16">
            <h1 className="text-3xl md:text-5xl font-serif mb-8 text-center">
                Competitive Salary Offers
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <SalaryCard value="12.7 LPA" label="Average Salary" />
                <SalaryCard value="11.5 LPA" label="Median Salary" />
                <SalaryCard value="20 LPA" label="Highest Salary" />
                <SalaryCard value="62%" label="Avg Salary Increase" />
            </div>
            <p className="text-gray-500 text-sm mt-6 text-center">
                *Based on our last career drive
            </p>
            <div  className="w-4/5 mx-auto">
                <div className="mt-8 border-t border-gray-500"></div>
            </div>
        </div>
    );
};

export default Salaries;