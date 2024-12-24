import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BorrowModal from '../../components/BorrowModal/BorrowModal';

const BookDetails = () => {
    const data = useLoaderData()

    const { author_name, short_des, photo, quantity, name, _id, category, rating, description } = data || {}
    return (
        <div className=''>
            
            <h1 className='text-center font-bold md:text-4xl text-3xl my-8'>Book details about {name}</h1>
            <div className="hero md:w-2/3 mx-auto border rounded-md my-12">
                <div className="hero-content gap-8 flex-col lg:flex-row">
                    <div className=''>
                        <img
                            src={photo}
                            className="max-w-sm rounded-lg shadow-2xl object-cover h-[350px]" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Book Name : <span className='font-semibold' >{name}</span></h1>
                        <p className="py-1 font-bold">Author Name : <span className='font-semibold'>{author_name}</span></p>
                        <p className="py-1 font-bold">Category : <span className='font-semibold'>{category}</span></p>
                        <p className="py-1 font-bold">Quantity : <span className='font-semibold'>{quantity}</span></p>
                        <p className="py-1 font-bold">Short Description : <span className='font-semibold'>{short_des}</span></p>
                        <p className="py-1 font-bold"> Description : <span className='font-semibold'>{description}</span></p>
                        <div className='flex justify-end  items-center py-2'>
                            <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn px-3 font-bold bg-green-500 hover:bg-green-600">Borrow Book</button>
                        </div>
                    </div>
                </div>
                <div className='mt-4'>
                <BorrowModal data={data}></BorrowModal>
            </div>
            </div>
        </div>
    );
};

export default BookDetails;