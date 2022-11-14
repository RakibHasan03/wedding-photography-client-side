import React, { useEffect, useState } from 'react';
import useTitle from '../../../Hooks/useTitle';
import About from './About';
import Information from './Information';
import Services from './Services';
import Slider from './Slider';


const Home = () => {
    useTitle('Home');
    window.scrollTo(0, 0);
    

    const [threeServices, setServices] = useState([])
  
    
    useEffect(() => {
        fetch('https://server-site-alpha.vercel.app/service')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                
        })
    },[])

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