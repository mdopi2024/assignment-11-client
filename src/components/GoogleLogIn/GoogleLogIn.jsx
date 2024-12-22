import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const GoogleLogIn = ({text}) => {

    const {googleLogIn}= useAuth()
    const navigate=useNavigate()

    const handleGoogleLogin=()=>{
        googleLogIn()
        .then(result=>{
            console.log(result)
            toast.success('successfully login')
            navigate('/')

        }).catch(error=>{
            console.log(error)
            toast.error(error.code)
        })
    }

    return (
        <div onClick={handleGoogleLogin} className='flex items-center justify-center mx-5 mt-3 bg-gray-300  
         rounded-md '>
           <div className='flex  justify-center items-center gap-3 py-1'>
           
            <FcGoogle className='text-3xl ' />
            <p className='font-semibold '>{text}</p>
           </div>
        </div>
    );
};

export default GoogleLogIn;