import { RxDotFilled } from "react-icons/rx";

const Day2 = () => {
    return (
        <div>
            {/* Programming Contest */}
            <div className='grid grid-cols-1 md:grid-cols-3 py-3 md:py-5 lg:py-7'>
                <div className='md:col-span-1 flex flex-col items-center text-cyan-600 font-semibold'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl'>10:00 AM - 1:00 PM</h1>
                    <h3 className='text-sm md:text-base lg:text-lg'>(CSE Lab 1 & 2)</h3>
                </div>
                <div className='md:col-span-2 mt-4 md:mt-0'>
                    <div className='bg-yellow-400 p-2 flex justify-center md:justify-start lg:justify-start'>
                        <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Programming Contest</h1>
                    </div>
                </div>
            </div>

            {/* Indore Game */}
            <div className='grid grid-cols-1 md:grid-cols-3 py-3 md:py-5 lg:py-7'>
                <div className='md:col-span-1 flex flex-col items-center text-cyan-600 font-semibold'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl'>10:00 AM - 3:00 PM</h1>
                    <h3 className='text-sm md:text-base lg:text-lg'>(CSE Department)</h3>
                </div>
                <div className='md:col-span-2 mt-4 md:mt-0'>
                    <div className='bg-yellow-400 p-2 flex justify-center md:justify-start lg:justify-start'>
                        <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Indore Game</h1>
                    </div>
                    <div className="text-base md:text-lg lg:text-xl font-medium px-6 space-y-2 mt-4 md:mt-6 lg:mt-8">
                        <div className="flex items-center">
                            <RxDotFilled />
                            <h3>Chess</h3>
                        </div>
                        <div className="flex items-center">
                            <RxDotFilled />
                            <h3>Fifa</h3>
                        </div>
                        <div className="flex items-start ">
                            <div className="pt-1"><RxDotFilled /></div>
                            <div>
                                <h3>Rubik's Cube,Bucket, Dart & Many More Exciting Games</h3>
                                <h4 className="text-sm md:text-base">(Open For Everyone)</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cultural Program */}
            <div className='grid grid-cols-1 md:grid-cols-3 py-3 md:py-5 lg:py-7'>
                <div className='md:col-span-1 flex flex-col items-center text-cyan-600 font-semibold'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl'>4:00 PM - 5:00 PM</h1>
                    <h3 className='text-sm md:text-base lg:text-lg'>(Auditorium 1)</h3>
                </div>
                <div className='md:col-span-2 mt-4 md:mt-0'>
                    <div className='bg-yellow-400 p-2 flex justify-center md:justify-start lg:justify-start'>
                        <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Cultural Program</h1>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Day2;