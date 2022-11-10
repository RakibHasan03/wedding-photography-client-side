import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './SingleService.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';

const SingleService = ({ service }) => {
    // console.log(service)

    const { name, img, description, price, rating, _id } = service
    return (
        <div>
            <div className="lg:w-11/12  h-[30rem] mx-auto rounded-lg bg-gray-200 shadow-lg dark:border-gray-700 my-3" >

                <div className='p-4'>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img className=" rounded-lg h-56 w-full" src={img} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                    
                </div>

                <div className="px-5 pb-5">

                    <h5 className="text-xl tracking-tight text-sky-700">{name}</h5>

                    <div className="flex items-center mt-2.5 mb-5 flex justify-between">
                        <span className='flex'><FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            <FaStar className='text-yellow-400' />
                            <FaStarHalfAlt className='text-yellow-400' />
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating}</span>
                    </div>
                    <div className='mb-3'>
                        <p>{description.length > 100 ? description.slice(0, 100) + '...' : description} </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-semibold text-gray-700">${price}</span>
                        <Link to={`/service/${_id}`} className="text-white gradient-button focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  ">See Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;