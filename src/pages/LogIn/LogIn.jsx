import React from 'react';
import logo from '../../assets/login-page.json'
import Lottie from 'lottie-react';
import GoogleLogIn from '../../components/GoogleLogIn/GoogleLogIn';
import { Link,  useLocation,  useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';

const LogIn = () => {

    const {signInWithEmail}=useAuth()
    const navigate=useNavigate()
    const location= useLocation()
    
    

    const handlForm=e=>{
        e.preventDefault()
        const formData=new FormData(e.target);
        const data= Object.fromEntries(formData.entries())
       signInWithEmail(data.email,data.password)
       .then(res=>{
        toast.success('succefully login')
        navigate(location?.state? location.state: '/')
       }).catch(error=>{
        toast.error(error.code)
        console.log(error)
       })
    }

    return (
        <div className="hero mt-0 bg-base-200 min-h-screen">
            <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
             
                   <Lottie animationData={logo}></Lottie>
                </div>
                <div className="card bg-base-100 w-full md:max-w-md shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <form onSubmit={handlForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <GoogleLogIn text='Login with Google'></GoogleLogIn>
                        <p className='text-center mt-1'>Don't have an account <Link to='/register' className='text-red-600 font-semibold'>Register ?</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;