import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TouriestSpots from '../../Components/TouristSpots/TouristSpots';

const Home = () => {
    return (
        <div className='my-20'>
            <Banner/>
            <TouriestSpots/>
        </div>
    );
};

export default Home;