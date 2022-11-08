import React from 'react';

const About = () => {
    return (
        <div>
          
          
            <div className=" grid md:grid-cols-2   gap-7 mt-20 mb-8 items-center">
                
                <div>
                    <img src="https://images.pexels.com/photos/1854897/pexels-photo-1854897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-96 w-full rounded-md' />
                </div>

                <div className='w-11/12 mx-auto'>
                    <h1 className='text-xl md:text-3xl font-semibold text-gray-700 '>Our exceptional Services, <br />
                        & Customer Satisfiction</h1>
                    
                    <p className='mt-10'>We Believe In our quality & services.We are Always ready for your calling,, Just Hire us for making your day Memoriable</p>

                    <div className='mt-10'>
                        <button className='gradient-button px-5 py-2.5 rounded-md text-white'>Our Blog</button>

                    </div>
                    

                </div>

                </div>

            
        </div>
    );
};

export default About;