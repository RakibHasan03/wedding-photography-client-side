import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
import MyReviewCard from './MyReviewCard';

const MyReview = () => {
    useTitle('My Review');
    const { user, logOut } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([])
    useEffect(() => {
        fetch(`https://server-site-alpha.vercel.app/myReview?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('wedding-ph')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
        .then(data=>setMyReviews(data))

    }, [user?.email,logOut])
    // console.log(myReviews)
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`https://server-site-alpha.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('deleted successfully');
                        const remaining = myReviews.filter(rev => rev._id !== id);
                        setMyReviews(remaining);
                    }
                })
        }
    }
    return (
        <div className='my-10 min-h-screen'>
            {
                myReviews?.length <= 0 ? <>
                    <h1 className='text-sky-700 text-center text-2xl font-semibold'>
                        You Don't Have Review yet..!! <br />
                        please go to details page and <br />
                        Give a Review
                        <div className='mt-5 text-center'>
                            <Link to='/services'>
                                <button className='gradient-button px-4 py-2 text-white rounded-md text-lg '> Go to Services</button>
                            </Link>
                            
                        </div>

                    </h1>
                </>
                    :
                    <>
                        <h1 className='text-sky-700 text-center text-xl font-semibold'>
                            You have {myReviews.length} review

                        </h1>
                    </>
          }
            {
                myReviews.map(rev => <MyReviewCard
                    key={rev._id}
                    review={rev}
                handleDelete={handleDelete}></MyReviewCard>)
            }
        </div>
    );
};

export default MyReview;