import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider';
import Review from './Review';
import useTitle from '../../../Hooks/useTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import BookingModal from './BookingModal';

const DetailsPage = () => {
    window.scrollTo(0, 0);
    useTitle('DetailsPage');

    const service = useLoaderData();
    console.log(service)
    const { user } = useContext(AuthContext)

    const [book, setBook] = useState(null)


    console.log(user?.email, user?.displayName
        , user?.photoURL,)
    const { name, img, description, price, rating, } = service

    const bookHandler = service => {
        setBook(service)
        
    }
    return (
        <div className='w-11/12 mx-auto'>
            <div className=" grid md:grid-cols-2  gap-7 mt-10 mb-8">
                <div >


                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} className="md:w-11/12 rounded-lg h-80" alt="" />
                        </PhotoView>
                    </PhotoProvider>

                </div>
                <div>
                    <h1 className='text-sky-600 text-2xl'>{name}</h1>
                    <p className='mt-5 text-sm text-gray-600'>{description}</p>

                    <div className='mt-5 flex items-center gap-10'>
                        <p className='text-white px-2 py-.5 rounded-md font-semibold bg-orange-500'>
                            {rating}
                        </p>
                        <p className='flex text-orange-500 '>
                            <FaStar /> <FaStar /> <FaStar /><FaStar /> <FaStarHalfAlt />

                        </p>

                    </div>

                    <p className=' text-xl text-sky-600  mt-6 font-semibold'> Price: $ {price}</p>
                    <div className='flex gap-12 mt-5 text-white'>

                        <label
                            
                            onClick={() => bookHandler(service)}
                            
                            htmlFor="booking-modal"
                            className='gradient-button px-4 py-2 rounded-md'>
                            Booking Now
                        </label>


                        <Link to='/services'>
                            <button className='gradient-button px-4 py-2 rounded-md'>
                                All Services
                            </button>
                        </Link>
                    </div>

                </div>



            </div>
            <Review service={service}></Review>
            {
                book && 
                <BookingModal
                        setBook={setBook}
                        service={service}
                    ></BookingModal>
            }
            
        </div>
    );
};

export default DetailsPage;