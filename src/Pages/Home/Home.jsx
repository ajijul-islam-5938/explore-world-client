import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TouriestSpots from '../../Components/TouristSpots/TouristSpots';
import Country from '../../Components/Contries/Country';

const Home = () => {
    return (
        <div className='my-20'>
            <Banner/>
            <TouriestSpots/>
            <Country/>
        </div>
    );
};

export default Home;