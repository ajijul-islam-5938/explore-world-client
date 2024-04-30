import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TouriestSpots from '../../Components/TouristSpots/TouristSpots';
import Country from '../../Components/Contries/Country';
import Zone from '../../Components/Zone/Zone';

const Home = () => {
    return (
        <div className='my-20'>
            <Banner/>
            <TouriestSpots/>
            <Country/>
            <Zone/>
        </div>
    );
};

export default Home;