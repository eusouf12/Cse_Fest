import { useEffect, useState } from 'react';

const Event_start = () => {


    const TimeLeft = () => {
        const FestDate = new Date('2024-11-27T10:00:00');
        const CurrentTime = new Date();
        const LeftTime = FestDate - CurrentTime;

        let RemainingTime = {};

        if (LeftTime > 0) {
            RemainingTime = {
                days: Math.floor(LeftTime / (1000 * 60 * 60 * 24)),
                hours: Math.floor((LeftTime / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((LeftTime / 1000 / 60) % 60),
                seconds: Math.floor((LeftTime / 1000) % 60)
            };
        }
        return RemainingTime;
    };



    const [remainingTime, setremainingTime] = useState(TimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setremainingTime(TimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    return (
        <div className=' max-w-6xl mx-auto my-10 flex justify-center'>
            <div className='flex flex-col items-center space-y-8'>
                <h1 className='text-3xl md:text-2xl lg:text-5xl text-blue-900 font-medium md:font-semibold lg:font-bold'>Event Starts In:</h1>

                <div className="grid grid-flow-col gap-2 md:gap-4 lg:gap-10 text-center auto-cols-max">
                    <div className="flex flex-col p-2 lg:p-4 bg-gray-300 rounded-box text-black">
                        <span className="countdown font-mono text-2xl md:text-4xl lg:text-5xl">
                            <span style={{ "--value": remainingTime.days || 0 }}></span>
                        </span>
                        days
                    </div>
                     <div className="flex flex-col p-2 lg:p-4 bg-gray-300 rounded-box text-black">
                        <span className="countdown font-mono text-2xl md:text-4xl lg:text-5xl">
                            <span style={{ "--value": remainingTime.hours || 0 }}></span>
                        </span>
                        hours
                    </div>
                     <div className="flex flex-col p-2 lg:p-4 bg-gray-300 rounded-box text-black">
                        <span className="countdown font-mono text-2xl md:text-4xl lg:text-5xl">
                            <span style={{ "--value": remainingTime.minutes || 0 }}></span>
                        </span>
                        min
                    </div>
                     <div className="flex flex-col p-2 lg:p-4 bg-gray-300 rounded-box text-black">
                        <span className="countdown font-mono text-2xl md:text-4xl lg:text-5xl">
                            <span style={{ "--value": remainingTime.seconds || 0 }}></span>
                        </span>
                        sec
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event_start;