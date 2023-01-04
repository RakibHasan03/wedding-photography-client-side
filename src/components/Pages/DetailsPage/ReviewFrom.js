import React, { useContext} from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';

const ReviewFrom = ({service, refetch}) => {
    const { name, _id } = service
    // console.log(service)
    const { user} = useContext(AuthContext);
    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const rating = form.rating.value;
        const message = form.message.value;
        const userName = user?.displayName;
        const email = user?.email;
        const userImg = user?.photoURL;
        const serviceId = _id;
        const serviceName = name;
        console.log(message,userName)
        const review = {
            rating,
            message,
            userImg,
            userName,
            email,
            serviceId,
            serviceName,
        }
      
        // console.log(typeof(rating));

        fetch('http://localhost:5000/review', {
            method: "POST",
            headers: {
            "content-type": "application/json",
        },
            body: JSON.stringify(review),
    })
      .then((res) => res.json())
    .then((data) => {
        
       
        // console.log(data);
        if (data.acknowledged) {
            toast.success("Review Added Successfully");
            form.reset();
            refetch()
        }
    })
    .catch((err) => console.error(err));

    };
    // console.log(reviews)



    return (
        <div>
            
            <div className='mt-5'>
                <h1 className='text-sky-600 text-2xl font-semibold text-center'>Give A review</h1>
                
                <form onSubmit={handleReview}  className="w-11/12 mx-auto">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-sky-600 text-md font-semibold mb-2">
                                Ratings
                            </label>

                            <select
                                name="rating"
                                className="w-full py-4 px-8 bg-blue-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 shadow-lg"
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
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-sky-600 text-md font-semibold mb-2">
                                Message
                            </label>
                            <textarea
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
    );
};

export default ReviewFrom;