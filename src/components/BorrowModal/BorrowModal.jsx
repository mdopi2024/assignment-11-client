import React from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { toast } from 'react-toastify';

const BorrowModal = ({ data }) => {
    const { author_name, short_des, photo, quantity, name, _id, category, rating, description } = data || {}
     
    const {user}=useAuth()

    const handleModal =async e=>{
        e.preventDefault();
        const form = e.target;
        const return_date=form.return_date.value
        const email = user?.email;
        const userName =user?.displayName;
        const bookId=_id
       const modalData ={return_date,email,userName,photo,name,category,bookId}
       try{
        const {data}=await axios.post(`${import.meta.env.VITE_URL}/borrows`,modalData)
        document.getElementById('my_modal_1').close()
        toast.success('You borrowed book successfully')
       }
       catch(error){
        toast.error(error.message)
       }
    }
    return (

        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <div className='flex justify-center items-center'>
                    <div className="card  w-full max-w-sm shrink-0 ">
                        <form onSubmit={handleModal} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text"  defaultValue={user?.displayName} placeholder="User Name"  className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input type="email" defaultValue={user?.email} placeholder="User Email" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Return Date</span>
                                </label>
                                <input type="date" name='return_date' placeholder="Return Date" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button
                                 className="btn bg-green-500 hover:bg-green-600">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal-action">



                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default BorrowModal;