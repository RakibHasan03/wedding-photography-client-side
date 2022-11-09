import React from 'react';
import { FaStar} from 'react-icons/fa';

const MyReviewCard = ({ review, handleDelete }) => {
    const { userName, userImg, message ,rating,_id} = review
    return (
        <div className='w-11/12 mx-auto'>
            <div className='mt-5 text-sky-700 my-5 border-2 rounded p-5  border-sky-500'>
                <div className='flex items-center gap-8'>
                    <div>
                        <img src={userImg} className='w-12 h-12 rounded-full' alt="" />
                    </div>
                    <div>
                        <h1>{userName}</h1>
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
                <p className='mt-3 md:w-10/12 '>{message}</p>
                <div className='flex items-center gap-8 text-white mt-5'>
                    <div >

                        <button onClick={()=>handleDelete(_id)} className='bg-red-500 px-5 py-2 rounded-md'>
                            Delete
                        </button>

                    </div>
                    <div>
                        <button className='bg-blue-500  px-5 py-2 rounded-md'>
                            Update
                        </button>
                    </div>
                </div>

            </div>

           
        </div>
    );
};

export default MyReviewCard;