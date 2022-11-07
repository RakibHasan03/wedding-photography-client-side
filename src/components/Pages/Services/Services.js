import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const services = useLoaderData();
    return (
        <div>
            <h1>All services:{services.length}</h1>
        </div>
    );
};

export default Services;