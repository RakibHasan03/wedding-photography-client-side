import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const ReviewUpdate = () => {
    const updateReview = useLoaderData()
    const {_id} = updateReview
    const { serviceName } = updateReview
    const [review, setReview] = useState(updateReview)
    const navigate = useNavigate()


    const handelUpdateReview = (event) => {
        event.preventDefault();
        // const form = event.target;
        // form.reset()
      
        fetch(`http://localhost:5000/myReview/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('user update successfully')
                    console.log(data)
                    navigate('/myReview')

                }
            })


    }
    

    const handelUpdateChange = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newReview = { ...review }
        newReview[field] = value
        setReview(newReview)
        console.log(review)

    }
    return (
        <div>
            <h1>Update:{serviceName}</h1>
            <div>
                
                <div className='mt-5'>
                    <h1 className='text-sky-600 text-2xl font-semibold text-center'>Update Your Review</h1>

                    <form onSubmit={handelUpdateReview}  className="w-11/12 mx-auto">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-sky-600 text-md font-semibold mb-2">
                                    Ratings
                                </label>

                                <select
                                    onChange={handelUpdateChange}
                                    name="rating"
                                    className="w-full py-4 px-8 bg-blue-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 shadow-lg"
                                >
                                    <option value="1">1</option>
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
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-sky-600 text-md font-semibold mb-2">
                                    Message
                                </label>
                                <textarea onChange={handelUpdateChange}
                                    className="no-resize appearance-none block w-full shadow-lg bg-blue-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                                    placeholder="Review Message......"
                                    name="message"
                                ></textarea>
                            </div>
                        </div>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3">
                                <button
                                    className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                    type="submit"
                                >
                                    Send
                                </button>
                            </div>
                            <div className="md:w-2/3"></div>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default ReviewUpdate;