

const Sponsor = () => {
    return (
        <div>
            <div className='flex justify-center my-3 md:my-10 lg:my-20'>
                <h1 className='text-xl md:text-3xl lg:text-5xl text-rose-600 font-semibold lg:font-bold'>Sponsors & Partners</h1>
            </div>
            <div className='flex flex-col gap-0 lg:gap-2 items-center my-1 lg:my-10'>
                <h2 className='text-lg md:text-2xl lg:text-3xl text-blue-900 font-medium md:font-semibold lg:font-bold'>We are Looking for  </h2>
                <img className='w-1/2' src="https://t3.ftcdn.net/jpg/02/92/36/74/360_F_292367471_Ix2ekPQcg9Xc9bWCj3pCvzgVn3INuqm2.jpg" alt="" />
            </div>
        </div>
    );
};

export default Sponsor;