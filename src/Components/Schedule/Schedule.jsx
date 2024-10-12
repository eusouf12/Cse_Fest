import { useState } from "react";
import Day1 from "../Day_1/Day1";
import Day2 from "../Day_2/Day2";


const Schedule = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (num) => {
        setActiveTab(num);
    };

    return (
        <div className='space-y-4 lg:space-y-8 py-5 max-w-5xl mx-auto'>
            <div className='flex justify-center'>
                <h1 className='text-2xl md:text-3xl lg:text-5xl text-blue-900 font-semibold md:font-semibold lg:font-bold'>
                    Schedule
                </h1>
            </div>

            <div>
                <div className="grid grid-cols-2">
                    <a
                        className={`py-5 flex justify-center items-center ${activeTab === 1 ? 'bg-cyan-400' : 'bg-base-300'}  text-lg md:text-xl lg:text-3xl cursor-pointer transition duration-300 ease-in-out transform hover:scale-105`}
                        onClick={() => handleTabClick(1)}
                    >
                        <div>
                            <h3 className="font-bold">DAY 1</h3>
                            <h4 className="font-medium text-sm md:text-base lg:text-lg">(Wed 27, November)</h4>
                        </div>
                    </a>
                    
                    <a
                        className={`py-5 flex justify-center items-center ${activeTab === 2 ? 'bg-cyan-400' : 'bg-base-300'}  text-lg md:text-xl lg:text-3xl cursor-pointer transition duration-300 ease-in-out transform hover:scale-105`}
                        onClick={() => handleTabClick(2)}
                    >
                        <div>
                            <h3 className="font-bold">DAY 2</h3>
                            <h4 className="font-medium text-sm md:text-base lg:text-lg">(Thu 28, November)</h4>
                        </div>

                    </a>
                </div>

                <div className="p-5 md:p-8 lg:p-10 bg-base-300 rounded-lg shadow-lg">
                {activeTab === 1 && (
                    <div className="transition-opacity duration-500 ease-in-out">
                        <Day1 />
                    </div>
                )}
                {activeTab === 2 && (
                    <div className="transition-opacity duration-500 ease-in-out">
                        <Day2 />
                    </div>
                )}
            </div>
            </div>
        </div>
    );

};

export default Schedule;