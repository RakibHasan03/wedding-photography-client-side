import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react'
import reader from '../../../Asset/Images/38435-register.json'
import { AuthContext } from '../../../Context/AuthProvider';

const Register = () => {
    const [error, setError] = useState("")
    const [accepted, setAccepted] = useState(false)
    // const navigate = useNavigate()
    // const location = useLocation();
    // const from = location.state?.from?.pathname || '/';
    const { createAccount, updateUserProfile } = useContext(AuthContext)
    const registerHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoUrl, email, password)
        createAccount(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                setError('')
                handelUpdateProfile(name, photoURL)
                // toast.success('You are SuccessFully Sign Up');
                // navigate(from, { replace: true })

            })
            .catch(error => {
                // console.error(error.message)
                setError(error.message)
            })



    }
    const handelUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    // const handelChecked = (event) => {
    //     setAccepted(event.target.checked)

    // }

    









    return (
        <div  className=" grid md:grid-cols-2  w-11/12 mx-auto gap-7 mt-10 ">

            <div>
                <div>
                    <Lottie animationData={reader} loop={true}  />

                </div>
            </div>
            <div>
                <div className='w-11/12 mx-auto' data-aos="fade-down" data-aos-duration='2000'>
                    <div className='flex justify-center'>
                        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-indigo-500 dark:text-gray-100">
                            <h1 className="text-2xl font-bold text-center">Register</h1>
                            <form onSubmit={registerHandler} className="space-y-6 ng-untouched ng-pristine ng-valid">
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block text-white">Full Name</label>
                                    <input type="text" name="name" id="name" placeholder="your name" className="w-full px-4 py-3 shadow-xl rounded-md dark:border-gray-700 bg-white dark:text-gray-700 focus:outline-none " required />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block text-white">Photo URL</label>
                                    <input type="text" name="photoURL" id="photoUrl" placeholder="Photo URL" className="w-full shadow-xl px-4 py-3 rounded-md dark:border-gray-700 bg-white dark:text-gray-700 focus:outline-none " required />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block text-white">Email</label>
                                    <input type="email" name="email" id="username" placeholder="your email" className="w-full shadow-xl px-4 py-3 rounded-md dark:border-gray-700 bg-white dark:text-gray-700 focus:outline-none " required />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="password" className="block text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 bg-white dark:text-gray-700 focus:outline-none" />
                                    <div className="flex justify-center text-xs text-red-800" required>
                                        <p className='text-md mt-1'>{error.slice(9,error.length -21)}</p>
                                    </div>
                                </div>
                             
                                <button
                                 // disabled={!accepted}
                                    className="block shadow-md w-full p-3 text-center rounded-sm dark:text-gray-900 bg-white hover:bg-violet-300 disabled:bg-gray-600 hover:disabled:text-white">Register</button>
                            </form>


                            <div className="flex items-center pt-4 space-x-1">
                                <p className="text-xs text-center sm:px-6 text-white">Already have an account?
                                    <Link to='/login' className="underline ml-3 text-blue-800">Log In</Link>
                                </p>
                            </div>


                        </div>
                    </div>
                </div>

            </div>

        
        </div>
       
    );
};

export default Register;