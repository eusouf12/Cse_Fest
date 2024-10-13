import Banner from '../Banner/Banner';
import Schedule from '../Schedule/Schedule';
import Sponsor from '../Sponsor/Sponsor';
import Event_start from '../Event_start/Event_start';
import About from '../About/About';
import Resistration from '../Resistration/Resistration';
import Participent from '../Particepent/Participent';


const Fest = () => {
    return (


        <div className='bg-base-300'>
            <div className='max-w-7xl mx-auto '>
                <Banner></Banner>
                <Participent></Participent>
                <Event_start></Event_start>
                <About></About>
                <Schedule></Schedule>
                <Resistration></Resistration>
                <Sponsor></Sponsor>
            </div>
        </div>
    );
};

export default Fest;