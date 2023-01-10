import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useTitle from '../../../Hooks/useTitle';
import Loading from '../../loading/Loading';

const AddService = () => {
    useTitle('AddService');
    window.scrollTo(0, 0);
    const [loading, setLoading] = useState(null)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handelUpdate = (data) => {
        setLoading(true)
        console.log(data)

        const image = data.url[0]
        console.log(image)

        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {

                console.log(imgData.data.url)
                if (imgData.success) {
                    const service = {
                        img: imgData.data.url,
                        name: data.name,
                        description: data.description,
                        price: data.price,
                        rating: data.rating

                    }
                    fetch('http://localhost:5000/services', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(service)


                    })
                        .then(res => res.json())
                        .then(data => {
                            setLoading(false)
                            if (data.acknowledged) {
                                toast.success('Service added successfully')
                                console.log(data)
                                reset()
                            }

                        })

                }
            })

        // form.reset()





    }




    return (
        <div>
            {
                loading && <Loading></Loading>
            }

            <div className=" min-h-screen mx-auto">
                <div className="flex justify-center my-5  items-center">
                    <form
                        onSubmit={handleSubmit(handelUpdate)}

                        className="w-full md:w-1/2 flex flex-col items-center " >

                        <h1 className="text-center text-2xl font-bold text-gray-600 mb-6">Add A Service</h1>

                        <div className="w-3/4 mb-6">
                            <input
                                type="text"
                                {...register("name", {
                                    required: "Name is required",
                                })}

                                className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 shadow-lg" placeholder="Service Name" required />
                            {errors.name && (
                                <p className="text-red-600" role="alert">
                                    {errors.name?.message}
                                </p>
                            )}
                        </div>

                        {/* <div className="w-3/4 mb-6">
                            <input  type="text" name="img" className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 shadow-lg " placeholder="Photo Url" required/>
                        </div> */}
                        <div className="w-3/4 mb-6">
                            <label
                                htmlFor="dropzone-file"
                                className="flex items-center w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 shadow-lg"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-gray-300 dark:text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                    />
                                </svg>

                                <h2 className="mx-3 text-gray-400">Select Image</h2>

                                <input
                                    // {...register("url", {
                                    //     required: "Image is required",
                                    // })}

                                    {...register("url", {
                                        required: "Image is required",
                                    })}
                                    id="dropzone-file"
                                    type="file"
                                    className="hidden"
                                    required />
                            </label>
                        </div>
                        <div className="w-3/4 mb-6">
                            <input type="number"

                                // name="price"
                                {...register("price", {
                                    required: "price is required",
                                })}

                                className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 shadow-lg " placeholder="price" required />
                        </div>

                        <div className="w-3/4 mb-6">
                            <label className='text-gray-400'>Rating</label>
                            <select


                                {...register("rating", {
                                    required: "rating is required",
                                })}
                                className="w-full py-4 px-8  bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 shadow-lg"
                            >

                                <option value="1" selected>1</option>
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
                            <textarea
                                rows="4"


                                {...register("description", {
                                    required: "description is required",
                                })}

                                id="message"
                                placeholder="Description"
                                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-slate-200  py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md shadow-lg"
                                required></textarea>
                            {errors.description && (
                                <p className="text-red-600" role="alert">
                                    {errors.description?.message}
                                </p>
                            )}
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