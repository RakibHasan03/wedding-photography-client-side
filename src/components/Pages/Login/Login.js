import React, { useContext, useState } from 'react';
import Lottie from 'lottie-react'
import reader from '../../../Asset/Images/107800-login-leady.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import './Login.css'


const Login = () => {

    const [error, setError] = useState("")
    const { signIn, providerLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const loginHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })  
    }
    const googleHandler = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('')
                 navigate(from, { replace: true })
            })
            .then(error => {
                // console.error(error.message)
                setError(error.message)
            })
    }



    return (
        <div className=" grid md:grid-cols-2  w-11/12 mx-auto gap-7 my-12">
        
            <div>
                
                    <div className='w-11/12 mx-auto'>
                        <Lottie animationData={reader} loop={true} />

                    </div>
                
            </div>
            <div>
                <div className='flex justify-center '>
                    <div className="w-full max-w-md p-4 rounded-md  sm:p-8  dark:text-gray-100 shadow-2xl bg-sky-600">
                        <h2 className="mb-3 text-3xl font-semibold text-center ">Login to your account</h2>
                        <p className="text-sm text-center dark:text-gray-100">Don't have account?
                            <Link to='/register' className='underline ml-3 text-blue-900 text-lg'>Sign up here</Link>
                        </p>
                        <div className="my-6 space-y-4">
                            <button onClick={googleHandler} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-800 dark:text-gray-500   bg-white shadow-2xl font-semibold">
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
                        <form onSubmit={loginHandler} className="space-y-8 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm">Email address</label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-8 py-2  rounded-md bg-white shadow-2xl dark:text-gray-900 placeholder:text-gray-500 focus:outline-none" required />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <label htmlFor="password" className="text-sm">Password</label>
                                    </div>
                                    <input type="password" name="password" id="password" placeholder="*****" className="w-full px-8 py-2 font-semibold rounded-md bg-white shadow-2xl dark:text-gray-900 placeholder:text-gray-500 focus:outline-none" required/>
                                    <p className='text-red-700 mt-0'>{error}</p>
                                </div>
                            </div>
                          
                            <button  className="w-full px-8 py-3  rounded-md sign-button text-white">Sign in</button>
                        </form>
                    </div>

                </div>
            </div>
            
        </div>
       
    );
};

export default Login;