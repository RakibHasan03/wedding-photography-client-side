import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import ReviewCard from './ReviewCard';
import ReviewFrom from './ReviewFrom';


const AllReviews = ({ service }) => {
    const {user} = useContext(AuthContext)
    const {  name } = service
    // const [reviews, setReviews] = useState([])
    // const [refresh, setRefresh] = useState(true)
    // useEffect(() => {
    //     const url = `http://localhost:5000/reviews?serviceName=${name}`;
    //     fetch(url)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setReviews(data);
    //             setRefresh(!refresh);
                
    //         });
    // }, [name, refresh]);
    // // console.log(reviews)

    const url = `http://localhost:5000/reviews?serviceName=${name}`;

    const { data: reviews = [], isLoading, refetch } = useQuery({
        queryKey: ['serviceName',],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

    })
     
    return (
        <div>
            <div className='w-11/12 mx-auto py-3 px-5 md:px-0'>
                <h1 className='text-sky-700 text-xl '>Available Reviews: { reviews?.length ? reviews.length : "0"}</h1>

                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                        service={service}
                        
                    
                    ></ReviewCard>)
              }

                


            </div>
            {
                user?.email ?
                    <>
                        <ReviewFrom service={service}
                            refetch={refetch}
                        
                        ></ReviewFrom>
                        {/* <p>hello</p> */}
                    </>
                    :
                    <>
                        <Link to='/login'>
                            <div className='w-11/12 mx-auto'>
                                <button className='gradient-button px-4 py-3 rounded-md text-white text-lg'>
                                    For Review Please Login
                                </button>
                            </div>
                        </Link>
                    </>
            }
        </div>
        
    );
};

export default AllReviews;