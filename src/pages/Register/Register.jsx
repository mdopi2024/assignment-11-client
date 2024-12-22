import React from 'react';
import logo from '../../assets/register-page.json'
import Lottie from 'lottie-react';
import GoogleLogIn from '../../components/GoogleLogIn/GoogleLogIn';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { collapseToast, toast } from 'react-toastify';

const Register = () => {

    const { creatUserWithEmail, updateUserProfile } = useAuth()
    const navigate = useNavigate()

    const handlForm = e => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries())
        const updateData = {
            displayName: data.name,
            photoURL: data.photo
        }

        const checkPass = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/

        if (!checkPass.test(data.password)) {
           return toast.error('Password must be at least 6 characters long and include at least one uppercase letter and one lowercase letter')
        }

        creatUserWithEmail(data.email, data.password)
            .then(res => {
                console.log(res)
                toast.success('succefully register')
                updateUserProfile(updateData)
                    .then(res => { console.log(res) })
                    .catch(error => console.log(error))
                navigate('/')
            }).catch(error => toast.error(error.code))
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">


                    <Lottie animationData={logo}></Lottie>

                </div>
                <div className="card bg-base-100 w-full max-w-lg
                 shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold text-center">Register now!</h1>
                    <form onSubmit={handlForm} className="card-body">

                        <div className='flex flex-col md:flex-row gap-3'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo-URL</span>
                                </label>
                                <input type="url" name='photo' placeholder="Photo-URL" className="input input-bordered" required />
                            </div>

                        </div>


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

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary font-semibold">Register</button>
                        </div>

                        <GoogleLogIn text='Register With Google'></GoogleLogIn>
                        <p className='text-center mt-1'>Already have an account <Link to='/login' className='text-red-600 font-semibold'>SignIn ?</Link></p>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Register;