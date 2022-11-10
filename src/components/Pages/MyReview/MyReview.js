import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
import MyReviewCard from './MyReviewCard';

const MyReview = () => {
    useTitle('My Review');
    const { user, logOut } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myReview?email=${user?.email}`, {
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
            fetch(`http://localhost:5000/reviews/${id}`, {
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
        <div className='my-10'>
            <h1 className='text-sky-700 text-center text-xl font-semibold'>
                You have {myReviews.length} review <br />
                
            </h1>
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