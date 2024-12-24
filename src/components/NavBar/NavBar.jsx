import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import banner_log from '../../assets/banner-logo.png'


const NavBar = () => {
    const links = <>
        <li><NavLink to='/' className={({isActive})=>`${isActive && '!bg-blue-600 !font-bold !text-white'}`}>Home</NavLink></li>
        <li><NavLink to='/allbooks' className={({isActive})=>`${isActive && '!bg-blue-600 !font-bold !text-white'}`}>All Books</NavLink></li>
        <li><NavLink to='/addbooks' className={({isActive})=>`${isActive && '!bg-blue-600 !font-bold !text-white'}`}>Add Books</NavLink></li>
        <li><NavLink to='/borrowbooks' className={({isActive})=>`${isActive && '!bg-blue-600 !font-bold !text-white'}`}>Borrow Books</NavLink></li>

    </>
    const { signOutUser, user } = useAuth()
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOutUser()
            .then(result => {
                console.log(result)
                navigate('/login')
            }).catch(error => {
                console.log(error)
            })

    }
    return (
        <div>
            <div className="navbar flex justify-center items-center bg-blue-900 text-white px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-300 text-black font-semibold rounded-box z-50 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className='flex justify-center items-center ' >
                        <img src={banner_log } className='w-16' alt="" />
                    <Link to='/' className="btn btn-ghost text-2xl">
                    KnowledgeNest</Link >
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    {
                        user ?
                            <div>
                                <div className="flex flex-col items-end dropdown-end group relative">
                                    <div tabIndex={0} role="button" className="btn  btn-ghost btn-circle avatar ">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS Navbar component"
                                                src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <ul 
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content z-50 bg-gray-400 text-black rounded-box  mt-3 w-52 p-2 shadow hidden group-hover:block absolute top-7 ">
                                        <li className=' font-bold text-[17px] text-center text-black rounded-lg'>{user?.displayName}</li>
                                        <li className='border text-black rounded-lg font-bold mt-3 '><button onClick={handleSignOut} className='text-center  block'>Sign Out</button></li>
                                    </ul>
                                </div>
                            </div>
                            :
                            <div className='flex gap-3'>
                                <Link to='/login' className='border border-blue-600 rounded-md px-3 py-2 font-semibold'>SignIn</Link>
                                <Link to='/register' className='border border-blue-600 rounded-md px-3 py-2 font-semibold'>Register</Link>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavBar;