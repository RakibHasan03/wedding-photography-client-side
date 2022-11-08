import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Information from './Information';
import Services from './Services';
import Slider from './Slider';

const Home = () => {

    const threeServices = useLoaderData()
    return (
        <div className='w-11/12 mx-auto my-10'>
            <Slider></Slider>
            <Services
                threeServices={threeServices}
            
            ></Services>
            <Information></Information>
           
        </div>
    );
};

export default Home;