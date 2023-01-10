import React, {  useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

import { AuthContext } from '../../../Context/AuthProvider';
import navLogo from '../../../Asset/Images/wedding-photography.png'
import useAdmin from '../../Hooks/UseAdmin';


const Header = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const logOutHandler = () => {
        logOut()
            .then(() => {
                console.log('log out successFully')
            })
            .catch(() => {

            })
    }

    // const url = `http://localhost:5000/bookings?email=${user?.email}`

    // const { data: myOrders = [], isLoading } = useQuery({
    //     queryKey: ['bookings', user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         return data;
    //     }

    // })
    return (
        <div className="bg-sky-600 sticky top-0 z-50 py-1">
            <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <NavLink
                        to='/'
                        aria-label="Learn With Programming"
                        title="Learn With Programming"
                        className="inline-flex items-center"
                    >
                        <img src={navLogo} className='w-12 h-10' alt="" />
                        <span className="ml-4 text-md md:text-lg  tracking-wide text-gray-100 hover:text-blue-900">
                          Wedding Photography
                        </span>
                    </NavLink>
                  
                    <ul className="flex items-center hidden space-x-6 lg:flex">
                        <li>
                            <NavLink
                                to='/home'
                                aria-label="Home"
                                title="Home"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/services'
                                aria-label="services"
                                title="services"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                            >
                                Services
                            </NavLink>
                        </li>
                     
                    
                        <li>
                            <NavLink
                                to='/blog'
                                aria-label="Blog"
                                title="Blog"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                            >
                                Blog
                            </NavLink>
                        </li>
                        {
                            user?.uid ?
                                <>
                                    
                                    {
                                        isAdmin && 
                                        <li>
                                            <NavLink
                                                to='/addService'
                                                aria-label="addService"
                                                title="addService"
                                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                            >
                                                Add Service
                                            </NavLink>
                                        </li>
                                   }
                                    <li>
                                        <NavLink
                                            to='/myReview'
                                            aria-label="myReview"
                                            title="myReview"
                                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                        >
                                            My Review
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to='/cart'
                                            aria-label="myOrder"
                                            title="myOrder"
                                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                        >
                                            My Order
                                        </NavLink>
                                    </li>
                                    <li>
                                        <button onClick={logOutHandler}
                                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"> Log Out</button>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <NavLink
                                            to='/login'
                                            aria-label="login"
                                            title="login"
                                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                        >
                                            Login
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            to='/register'
                                            aria-label="register"
                                            title="register"
                                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                        >
                                            Register
                                        </NavLink>
                                    </li>
                                </>
                        }

                        {
                            user?.uid ?
                                <>  <li>

                                    <img src={user?.photoURL}
                                        title={user?.displayName}
                                        className='rounded-full h-10 w-10' alt="" />
                                </li></>
                                :
                                <>
                                    <FaUserAlt
                                        title='Your Profile'
                                        className='text-2xl' />
                                </>
                        }





                    </ul>
                  
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-sky-600 border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <NavLink
                                                to='/'
                                                aria-label="Learn With Programming"
                                                title="Learn With Programming"
                                                className="inline-flex items-center"
                                            >
                                                <img src={""} className='w-12' alt="" />
                                                <span className="ml-2 text-md  tracking-wide text-white hover:text-blue-900">
                                                    Wedding Photography
                                                </span>
                                            </NavLink>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                       
                                        <ul className="space-y-4">
                                            <li>
                                                <NavLink
                                                    to='/home'
                                                    aria-label="Home"
                                                    title="Home"
                                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/services'
                                                    aria-label="services"
                                                    title="services"
                                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Services
                                                </NavLink>
                                            </li>


                                            <li>
                                                <NavLink
                                                    to='/blog'
                                                    aria-label="Blog"
                                                    title="Blog"
                                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                >
                                                    Blog
                                                </NavLink>
                                            </li>
                                            {
                                                user?.uid ?
                                                    <>

                                                    
                                                        <li>
                                                            <NavLink
                                                                to='/myReview'
                                                                aria-label="myReview"
                                                                title="myReview"
                                                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                            >
                                                                My Review
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink
                                                                to='/cart'
                                                                aria-label="myOrder"
                                                                title="myOrder"
                                                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                            >
                                                                My Order
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <button onClick={logOutHandler}
                                                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"> Log Out</button>
                                                        </li>
                                                    </>
                                                    :
                                                    <>
                                                        <li>
                                                            <NavLink
                                                                to='/login'
                                                                aria-label="login"
                                                                title="login"
                                                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                            >
                                                                Login
                                                            </NavLink>
                                                        </li>

                                                        <li>
                                                            <NavLink
                                                                to='/register'
                                                                aria-label="register"
                                                                title="register"
                                                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:text-blue-900"
                                                            >
                                                                Register
                                                            </NavLink>
                                                        </li>
                                                    </>
                                            }

                                            {
                                                user?.uid ?
                                                    <>  <li>

                                                        <img src={user?.photoURL}
                                                            title={user?.displayName}
                                                            className='rounded-full h-10 w-10' alt="" />
                                                    </li></>
                                                    :
                                                    <>
                                                        <FaUserAlt
                                                            title='Your Profile'
                                                            className='text-2xl' />
                                                    </>
                                            }





                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;