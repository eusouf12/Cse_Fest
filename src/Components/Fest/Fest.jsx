import React from 'react';
import Banner from '../Banner/Banner';
import Schedule from '../Schedule/Schedule';
import Sponsor from '../Sponsor/Sponsor';
import Event_start from '../Event_start/Event_start';

const Fest = () => {
    return (
        
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <Event_start></Event_start>
            <Schedule></Schedule>
            <Sponsor></Sponsor>
        </div>
    );
};

export default Fest;