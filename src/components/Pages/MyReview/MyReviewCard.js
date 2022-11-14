import React from 'react';
import { FaStar} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyReviewCard = ({ review, handleDelete }) => {
    const { userName, userImg, message, rating, _id, serviceName } = review
    return (
        <div className='w-11/12 mx-auto'>
            <div className='mt-5 text-sky-700 my-8 border-2 rounded p-5  border-gray-400 bg-gray-200 shadow-lg'>
                
                <div className='flex items-center gap-8'>
                    <div>
                        <img src={userImg} className='w-12 h-12 rounded-full' alt="" />
                    </div>
                    <div>
                        <h1>{userName}</h1>
                    </div>
                </div>
                <div>
                    <h1 className='text-sky-700 text-lg my-3'>Review Of: <span className='text-lg text-blue-900'>{serviceName}</span></h1>
                </div>
                <div className='flex items-center gap-8 '>
                    <div className='flex '>
                       
                        <FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <div>
                        {rating}
                    </div>
                </div>
                <p className='mt-3 md:w-10/12 '>{message}</p>
                <div className='flex items-center gap-8 text-white mt-5'>
                    <div >

                        <button onClick={() => handleDelete(_id)} className='bg-gradient-to-r from-red-400 to-pink-600 px-5 
                          py-2 rounded-md'>
                            Delete
                        </button>

                    </div>
                    <div>
                        <Link to={`/update/${_id}`}>
                            <button className='gradient-button px-5 py-2 rounded-md'>
                                Update
                            </button>
                            
                        </Link>
                    </div>
                </div>

            </div>

           
        </div>
    );
};

export default MyReviewCard;