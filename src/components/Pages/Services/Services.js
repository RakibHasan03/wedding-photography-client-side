import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    useTitle('Services');
    const services = useLoaderData();
    return (
        <div className=' w-11/12 mx-auto'>
            <h1 className='mt-10 text-3xl text-center font-semibold text-sky-600'>My All Services</h1>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3  gap-7 mt-5 mb-8">
                {
                    services.map(service=> <ServiceCard
                        key={service._id}
                        service={service}

                        

                    ></ServiceCard>)
                }
                
            </div>


        </div>
    );
};

export default Services;