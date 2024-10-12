

const Day1 = () => {
    return (
        <div>
            {/* Hackathon */}
            <div className='grid grid-cols-1 md:grid-cols-3 py-3 md:py-5 lg:py-7'>
                <div className='md:col-span-1 flex flex-col items-center text-cyan-600 font-semibold'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl'>10:00 AM - 8:00 PM</h1>
                    <h3 className='text-sm md:text-base lg:text-lg'>(Auditorium 1)</h3>
                </div>
                <div className='md:col-span-2 mt-4 md:mt-0'>
                    <div className='bg-yellow-400 p-2 flex justify-center md:justify-start lg:justify-start'>
                        <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Hackathon</h1>
                    </div>
                </div>
            </div>
            {/* Poster Design  */}
            <div className='grid grid-cols-1 md:grid-cols-3 py-3 md:py-5 lg:py-7'>
                <div className='md:col-span-1 flex flex-col items-center text-cyan-600 font-semibold'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl'>11:00 AM - 1:00 PM</h1>
                    <h3 className='text-sm md:text-base lg:text-lg'>(CSE Department)</h3>
                </div>
                <div className='md:col-span-2 mt-4 md:mt-0'>
                    <div className='bg-yellow-400 p-2 flex justify-center md:justify-start lg:justify-start'>
                        <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Poster Design</h1>
                    </div>
                </div>
            </div>


            {/* Quiz  */}
            <div className='grid grid-cols-1 md:grid-cols-3 py-3 md:py-5 lg:py-7'>
                <div className='md:col-span-1 flex flex-col items-center text-cyan-600 font-semibold'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl'>2:00 PM - 3:00 PM</h1>
                    <h3 className='text-sm md:text-base lg:text-lg'>(CSE Department)</h3>
                </div>
                <div className='md:col-span-2 mt-4 md:mt-0'>
                    <div className='bg-yellow-400 p-2 flex justify-center md:justify-start lg:justify-start'>
                        <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Quiz</h1>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Day1;