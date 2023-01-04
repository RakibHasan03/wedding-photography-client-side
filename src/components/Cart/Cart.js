import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../Pages/Loading/Loading';

const Cart = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: myOrders = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div >
            {
                myOrders?.length <= 0 ? <>
                
                    <div className='my-10'>
                        <h1 className='text-2xl text-[#0284C7] text-center font-semibold'> YOu don't  Have an order yet, Please Select your Service</h1>

                        <div className='mt-10 text-center'>
                            <Link to='/services'>
                                <button className='gradient-button px-4 py-2 text-white rounded-md text-lg '> Go to Services</button>
                            </Link>

                        </div>

             </div>
                
                </>
                    :
                    <>
                        <h3 className='text-[#0284C7] my-5 text-center text-2xl'>My Orders</h3>

                        <div className="overflow-x-auto min-h-screen">
                            <table className="table w-full">

                                <thead>
                                    <tr>
                                        <th>Serial</th>
                                        <th>Product Name</th>
                                        <th>Product Price</th>
                                        <th>Customer Name</th>
                                        <th>Phone</th>
                                        <th>Meeting Location</th>
                                        <th>Payment</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        myOrders?.map((order, index) => <tr className="hover"
                                            key={order._id}>
                                            <th>{index + 1}</th>
                                            <td>{order.ProductTitle ? order.ProductTitle : 'No Name'}</td>
                                            <td>$ {order.price}</td>
                                            <td>{order.userName}</td>
                                            <td>{order.phone}</td>
                                            <td>{order?.location ? order?.location : "No Location"}</td>
                                            <td>
                                                {
                                                    order?.price && !order?.paid && <Link

                                                    // to={`/dashboard/payment/${order._id}`}
                                                    >
                                                        <button className='btn btn-sm bg-[#0284C7] text-white'>Pay</button>

                                                    </Link>
                                                }

                                                {
                                                    order?.price && order.paid && <span className='text-green-500'>Paid</span>
                                                }


                                            </td>

                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
           }
        </div>
    );
};

export default Cart;