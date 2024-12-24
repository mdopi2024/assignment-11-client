import axios from 'axios';
import React from 'react';
import { collapseToast } from 'react-toastify';

import Swal from 'sweetalert2';

const BorrowedBookCard = ({ book, books, setBooks }) => {
    const { photo, category, currentDate, return_date, name, _id } = book

    const retrunBook = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`${import.meta.env.VITE_URL}/delete_book/${id}`)
                    .then(data => {
                        if (data.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const filter = books.filter(book=>book._id !== id)
                            setBooks(filter)
                        }

                    })


            }
        });

    }

    return (
        <div className="card card-compact bg-base-100 hover:scale-105   shadow-xl transition-all mb-12">
            <figure>
                <img
                    className='h-[180px] object-cover w-full'
                    src={photo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="font-semibold text-[18px]"> Book Name:<span className='text-gray-700'> {name}</span> </h2>
                <p className='font-bold'>Category : <span className='text-gray-700'>{category}</span></p>
                <p className='font-bold'>Borrowed Date : <span className='text-gray-700'>{currentDate}</span></p>
                <p className='font-bold'>Return Date : <span className='text-gray-700'>{return_date}</span></p>


                <div className="">
                    <button onClick={() => retrunBook(_id)} className="btn hover:bg-green-600   w-full bg-green-500 ">Return Book</button >
                </div>
            </div>
        </div>
    );
};

export default BorrowedBookCard;