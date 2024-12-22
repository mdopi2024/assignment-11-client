import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const AddBooks = () => {

    const handlForm=async e=>{
        e.preventDefault();
        const forData = new FormData(e.target);
        const data= Object.fromEntries(forData.entries())
        
        try{
            const {data:datas}=await axios.post(`${import.meta.env.VITE_URL}/add_books`,data)
            toast.success('Book succefully added')
            e.target.reset()
        }catch(error){toast.error(error)}
        
        
    }

    return (
        <div className='flex justify-center items-center my-6'>
            <div className="card  w-full max-w-lg  shrink-0 shadow-2xl">
                <div className='text-center text-3xl md:text-4xl font-bold'>Add Books</div>
                <form onSubmit={handlForm} className="card-body">

                    <div className=' md:flex justify-center items-center gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phot_URL</span>
                            </label>
                            <input type="url" name='photo' placeholder="Phot_URL" className="input input-bordered" required />

                        </div>
                    </div>


                    <div className=' md:flex justify-center items-center gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Author Name</span>
                            </label>
                            <input type="text" name='author_name' placeholder="Author Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" name='quantity' placeholder="Quantity" className="input input-bordered" required />

                        </div>
                    </div>


                    <div className=' md:flex justify-center items-center gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select className="input input-bordered  px-16"  required name="category" id="">
                                <option value="e.g., Novel">e.g., Novel</option>
                                <option value="History">History</option>
                                <option value="Drama">Drama</option>
                                <option value=" Sci-Fi"> Sci-Fi</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short DesCription</span>
                            </label>
                            <input type="text" name='short_des' placeholder="Short DesCription" className="input input-bordered" required />

                        </div>
                    </div>
                    {/* rating */}
                    <div className="rating my-2">
                        <span className='font-semibold'>Rating : </span>
                        <input type="radio" name="rating" value='1' className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating"
                            value='2'
                            className="mask mask-star-2  bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating" value='3' className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating" value='4' className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating" value='5' className="mask mask-star-2 bg-orange-400" />
                    </div>

                    <div>
                        <textarea name="description" id="" className='border w-full h-20 rounded-md px-3 py-2'></textarea>
                    </div>

                    <div className=" flex justify-end mt-6">
                        <button className="btn bg-blue-600 inline-block  px-5 hover:bg-blue-900 text-white">Add Book</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBooks;