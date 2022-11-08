import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider';

const DetailsPage = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext)
    console.log(user?.email, user?.displayName
        , user?.photoURL, )
    const { name, img, description, price, rating, _id } = service
    return (
        <div className='w-11/12 mx-auto'>
            <div className=" grid md:grid-cols-2  gap-7 mt-5 mb-8">
                <div >
                    <img src={img} className="md:w-11/12 rounded-lg h-80" alt="" />

                </div>
                <div>
                    <h1 className='text-sky-600 text-2xl'>{name}</h1>
                    <p className='mt-5 text-sm text-gray-600'>{description}</p>
                    
                    <div className='mt-5 flex items-center gap-14'>
                        <p className='text-white px-2 py-.5 rounded-md font-semibold bg-sky-500'>
                            {rating}
                        </p>
                        <p className='flex text-orange-500 '>
                            <FaStar /> <FaStar /> <FaStar /><FaStar /> <FaStarHalfAlt/>

                        </p>

                    </div>

                    <p className=' text-xl text-sky-600  mt-6 font-semibold'> Price: $ {price}</p>
                    <div className='flex gap-12 mt-5 text-white'>
                        <button className='gradient-button px-4 py-2 rounded-md'>
                            Booking Now
                        </button>
                        <button className='gradient-button px-4 py-2 rounded-md'>
                            All Services
                        </button>
                    </div>

                </div>

               

            </div>
        </div>
    );
};

export default DetailsPage;