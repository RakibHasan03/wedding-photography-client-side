import React from 'react';
import './Information.css'

const Information = () => {
    return (
        <div className=' bg-contact mt-12'>
            <div className='h-full w-full bg-simple py-3'>
                <div className='w-2/4 mx-auto mt-3 block p-5 rounded '>
                    <h1 className='text-3xl mt-10 font-bold  text-white  text-center '>Contact</h1>
                    <h1 className='font-bold text-white  text-center '>Stay connected with us</h1>
                    <input type="text" placeholder='Enter Your Name' className='w-full text-white font-bold placeholder:text-white placeholder:font-bold  mt-5 p-2 bg-simple shadow focus:outline-none rounded shadow-black' />
                    <input type="text" placeholder='Enter Your Email' className='w-full text-white font-bold placeholder:text-white placeholder:font-bold  mt-5 p-2 bg-simple shadow focus:outline-none rounded shadow-black' />
                    <textarea placeholder='Message' type="text" className='w-full text-white font-bold placeholder:text-white placeholder:font-bold h-24 mt-5 p-2 bg-simple shadow focus:outline-none rounded shadow-black' />
                    <div className='flex justify-center mt-5'>
                        <button className="btn bg-head px-10 border-0">Send </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;