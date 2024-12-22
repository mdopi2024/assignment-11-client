import React from 'react';
import logo from '../../assets/error-logo.json'
import Lottie from 'lottie-react';
const ErrorPage = () => {

    return (
        <div className='min-h-screen flex justify-center items-center w-full '>
            
            <div className='w-full'>
                <h1 className='text-center my-6  text-3xl md:text-4xl font-bold'>Page Not Found</h1>
            <Lottie className='md:h-[300px]  w-full' animationData={logo}></Lottie>
            </div>
        </div>
    );
};

export default ErrorPage;