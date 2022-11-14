import React from 'react';
import { Link } from 'react-router-dom';
import SingleService from './SingleService';
import { FaArrowRight } from 'react-icons/fa';
import 'react-photo-view/dist/react-photo-view.css';

const Services = ({ threeServices}) => {
    return (
        <div className='mt-12'>
            <h1 className='text-center text-4xl font-semibold text-gray-700'>My Photography Services</h1>
          
            <div className=" grid md:grid-cols-2 lg:grid-cols-3  gap-7 mt-5 mb-8">
                {
                    threeServices.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }
                
            </div>
            <div className='flex justify-center'>
                <Link to='/services'>
                    <button className='px-6 py-3 text-white rounded-md gradient-button flex items-center'> <p>Sell All</p> <p className='ml-3'> <FaArrowRight/></p>  </button>
                </Link>
            </div>
        </div>
    );
};

export default Services;