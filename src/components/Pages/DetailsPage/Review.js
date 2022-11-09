import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import AllReviews from './AllReviews';

const Review = ({ service }) => {
    console.log(service)
    const { name, rating } = service
    
    return (
        <div className='my-16 bg-gray-200 rounded-md shadow-lg pb-5'>
            <div className='w-11/12 mx-auto py-10 px-5 md:px-0'>
                <h1 className='text-sky-700 text-xl '>Rating and review of {name}</h1>
                <div className='flex gap-10 items-center'>
                    <div className='mt-4 text-center'>
                        <h1 className='text-4xl font-semibold text-blue-800'>{rating}</h1>
                        <div className='flex text-cyan-700 mt-1'>
                            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt/>
                        </div>
                    </div>
                  
                    <div className='mt-5' >
                        <div className='flex items-center gap-4 -my-1'>
                            <div className='text-xl font-semibold text-sky-600'>
                                5
                            </div>
                            <div className='bg-sky-600 rounded-md h-3 w-32'>

                            </div>
                        </div>
                        <div className='flex items-center gap-4 -my-1'>
                            <div className='text-xl font-semibold text-sky-600'>
                                4
                            </div>
                            <div className='bg-sky-600 rounded-md h-3 w-24'>

                            </div>
                        </div>
                        <div className='flex items-center gap-4 -my-1'>
                            <div className='text-xl font-semibold text-sky-600'>
                                3
                            </div>
                            <div className='bg-sky-600 rounded-md h-3 w-20'>

                            </div>
                        </div>
                        <div className='flex items-center gap-4 -my-1'>
                            <div className='text-xl font-semibold text-sky-600'>
                                2
                            </div>
                            <div className='bg-sky-600 rounded-md h-3 w-14'>

                            </div>
                        </div>
                        <div className='flex items-center gap-5 -my-1'>
                            <div className='text-xl font-semibold text-sky-600'>
                                1
                            </div>
                            <div className='bg-sky-600 rounded-md h-3 w-8'>

                            </div>
                        </div>

                        
                        
                    

                    </div>
                </div>
            </div>
           
          
            <AllReviews service={service}></AllReviews>
      </div>
    );
};

export default Review;