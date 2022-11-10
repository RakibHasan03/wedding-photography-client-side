import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../Hooks/useTitle';

const AddService = () => {
    useTitle('AddService');
    window.scrollTo(0, 0);
    const [service, setService] = useState({});
     const handelUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        // form.reset()
        console.log(service)

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(service)


        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Service added successfully')
                    console.log(data)
                    form.reset()
                }

            })
            

    }
    
    

    const handelInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newService = { ...service }
        newService[field] = value
        setService(newService)
         console.log(service)

    }

    return (
        <div>
           
            
            <div className=" min-h-screen mx-auto">
                <div className="flex justify-center my-5  items-center">
                    <form onSubmit={handelUpdate} className="w-full md:w-1/2 flex flex-col items-center " >
                    
                        <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">Add A Service</h1>
                      
                        <div className="w-3/4 mb-6">
                            <input   onChange={ handelInputBlur } type="text" name="name"  className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 shadow-lg" placeholder="Service Name" required/>
                        </div>
                       
                        <div className="w-3/4 mb-6">
                            <input onChange={handelInputBlur} type="text" name="img" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 shadow-lg " placeholder="Photo Url" required/>
                        </div>
                        
                        <div className="w-3/4 mb-6">
                            <input onChange={handelInputBlur} type="number" name="price" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 shadow-lg " placeholder="price" required/>
                        </div>
                        
                        <div className="w-3/4 mb-6">
                            <label className='text-gray-400'>Rating</label>
                            <select
                                onChange={handelInputBlur} 
                                name="rating"
                                placeholder='rating'
                                className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 shadow-lg "
                            >
                               

                                <option  value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="1.5">1.5</option>
                                <option value="2.5">2.5</option>
                                <option value="3.5">3.5</option>
                                <option value="4.5">4.5</option>
                            </select>
                        </div>
                        <div className="w-3/4 mb-6">
                            <textarea onChange={handelInputBlur} 
                                rows="4"
                                name="description"
                                id="message"
                                placeholder="Description"
                                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-slate-200  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md shadow-lg"
                            required></textarea>
                        </div>
                        
                       
                      
                        <div className="w-3/4 mt-4">
                            <button type="submit" className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700 shadow-lg"> Add Service</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;