import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';


const Update = () => {
    const book = useLoaderData()
    const {author_name,short_des,photo,quantity,name,_id,description,category,rating}=book ||{}
    const handleForm=async e=>{
        e.preventDefault();
        const forData = new FormData(e.target);
        const data= Object.fromEntries(forData.entries())
        data.short_des=short_des
        data.quantity=quantity
        data.description=description
        console.log(data)

        try{
            const {data:datas}=await axios.patch(`${import.meta.env.VITE_URL}/upade_book/${_id}`,data)
            toast.success('Updated succefully')
            e.target.reset()
        }catch(error){toast.error(error)}
    }
    return (
        <div className='flex justify-center items-center my-16'>
            <div className="card  w-full max-w-lg  shrink-0 shadow-2xl">
                <div className='text-center text-3xl md:text-4xl font-bold'>Update Book</div>
                <form onSubmit={handleForm}  className="card-body">

                    <div className=' md:flex justify-center items-center gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={name} placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phot_URL</span>
                            </label>
                            <input type="url" name='photo' defaultValue={photo} placeholder="Phot_URL" className="input input-bordered" required />

                        </div>
                    </div>


                    <div className=' md:flex justify-center items-center gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Author Name</span>
                            </label>
                            <input type="text" defaultValue={author_name} name='author_name' placeholder="Author Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select className="input input-bordered  px-16" defaultValue={category} required name="category" id="">
                                <option value="e.g., Novel">e.g., Novel</option>
                                <option value="History">History</option>
                                <option value="Drama">Drama</option>
                                <option value=" Sci-Fi"> Sci-Fi</option>
                            </select>
                    </div>
                    </div>
                    {/* rating */}
                    <div className="rating my-2">
                        <span className='font-semibold'>Rating : </span>
                        <input type="radio" name="rating-2" value='1' defaultValue={rating} className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-2"
                            value='2'
                            className="mask mask-star-2  bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-2" value='3' defaultValue={rating} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" value='4' defaultValue={rating} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" value='5'defaultValue={rating} className="mask mask-star-2 bg-orange-400" />
                    </div>

                    

                    <div className=" flex justify-end mt-6">
                        <button className="btn bg-blue-600 inline-block  px-5 hover:bg-blue-900 text-white">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;