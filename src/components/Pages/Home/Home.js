import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import About from './About';
import Information from './Information';
import Services from './Services';
import Slider from './Slider';


const Home = () => {
    useTitle('Home');
    

     const threeServices = useLoaderData()

    return (
        <div className='w-11/12 mx-auto my-10'>
            <Slider></Slider>
            <Services
                threeServices={threeServices}
            
            ></Services>
            <Information></Information>
            <About></About>
           
        </div>
    );
};

export default Home;