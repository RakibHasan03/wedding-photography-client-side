import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ review}) => {
    

    const { userImg, userName, message, rating } = review
    return (
        <div>

            <div className='mt-5 text-sky-700 my-5 border-2 rounded p-5  border-sky-500'>
                <div className='flex items-center gap-8'>
                    <div>
                        <img src={userImg} className='w-12 h-12 rounded-full' alt="" />
                    </div>
                    <div>
                        <h1>{ userName}</h1>
                    </div>
                </div>
                <div className='flex items-center gap-8 mt-3'>
                    <div className='flex '>
                        <FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <div>
                        {rating}
                    </div>
                </div>
                <p className='mt-3 md:w-10/12 '>{message }</p>
            </div>

        </div>
    );
};

export default ReviewCard;