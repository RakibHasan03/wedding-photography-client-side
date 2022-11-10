import React from 'react';
import Lottie from 'lottie-react'
import reader from '../../../Asset/Images/95256-email-confirmation.json'
const CheckOut = () => {
    return (
        <div>
            <Lottie animationData={reader} loop={true} className='w-96 mx-auto' />
        </div>
    );
};

export default CheckOut;

