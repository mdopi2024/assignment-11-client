import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const PrivateRoute = ({children}) => {

    const {user,loader}=useAuth()
     const location= useLocation()
    

    if(loader){
        return <div className='flex justify-center items-center mt-10'><span className="loading loading-spinner loading-lg"></span></div>
    }
    if(user){
        return children
    }
   
    return (
        <Navigate to='/login' state={location?.pathname}></Navigate>
    );
};

export default PrivateRoute;