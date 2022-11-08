import React from 'react';
import Lottie from 'lottie-react'
import reader from '../../../Asset/Images/107800-login-leady.json'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className=" grid md:grid-cols-2  w-11/12 mx-auto gap-7 my-12">
        
            <div>
                
                    <div className='w-11/12 mx-auto'>
                        <Lottie animationData={reader} loop={true} />

                    </div>
                
            </div>
            <div>
                <div className='flex justify-center '>
                    <div className="w-full max-w-md p-4 rounded-md  sm:p-8  dark:text-gray-100 shadow-2xl bg-indigo-500">
                        <h2 className="mb-3 text-3xl font-semibold text-center ">Login to your account</h2>
                        <p className="text-sm text-center dark:text-gray-100">Don't have account?
                            <Link to='/register' className='text-blue-900 ml-3'>Sign up here</Link>
                        </p>
                        <div className="my-6 space-y-4">
                            <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-800 dark:text-gray-500   bg-white shadow-2xl font-semibold">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                                <p>Login with Google</p>
                            </button>

                        </div>
                        <div className="flex items-center w-full my-4">
                            <hr className="w-full dark:text-gray-400" />
                            <p className="px-3 dark:text-gray-100">OR</p>
                            <hr className="w-full dark:text-gray-400" />
                        </div>
                        <form noValidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label for="email" className="block text-sm">Email address</label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-8 py-2  rounded-md bg-white shadow-2xl dark:text-gray-900 placeholder:text-gray-500 focus:outline-none"  />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <label for="password" className="text-sm">Password</label>
                                    </div>
                                    <input type="password" name="password" id="password" placeholder="*****" className="w-full px-8 py-2 font-semibold rounded-md bg-white shadow-2xl dark:text-gray-900 placeholder:text-gray-500 focus:outline-none" />
                                </div>
                            </div>
                            <button type="button" className="w-full px-8 py-3  rounded-md hover:bg-violet-900 bg-indigo-700 text-white">Sign in</button>
                        </form>
                    </div>

                </div>
            </div>
            
        </div>
       
    );
};

export default Login;