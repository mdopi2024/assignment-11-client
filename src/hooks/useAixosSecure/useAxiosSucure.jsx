import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from '../useAuth';
import { useNavigate } from 'react-router-dom';

const axiosInstance= axios.create({
    baseURL:import.meta.env.VITE_URL,
    withCredentials:true
})

const useAxiosSucure = () => {
    const {signOutUser}=useAuth()
    const navigate=useNavigate()

    useEffect(()=>{
        axiosInstance.interceptors.response.use(response=>{
            return response
        },async error=>{
            if(error?.status===401 || error?.status===403){
              signOutUser()
              navigate('/login')
            }
         
        })
    },[])

    return axiosInstance
   
};

export default useAxiosSucure;