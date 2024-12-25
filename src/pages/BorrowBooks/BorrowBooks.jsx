import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import BorrowedBookCard from '../../components/BorrowedBookCard/BorrowedBookCard';
import useAxiosSucure from '../../hooks/useAixosSecure/useAxiosSucure';

const BorrowBooks = () => {
    const [books,setBooks]=useState([])
    const {user}=useAuth()
    const aixosSucure= useAxiosSucure()
    useEffect(()=>{
        try{
            aixosSucure.get(`/borrow?email=${user.email}`)
            .then(data=>{
                setBooks(data.data)
            })
        }catch(error){console.log(error)}

    },[user.email])
    return (
        <div>
            <h1 className='text-center text-3xl md:text-4xl font-bold my-8'>All Borrowed Books</h1>
             <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-10'>
                {
                    books.map(book=><BorrowedBookCard key={book._id} book={book} books={books} setBooks={setBooks}></BorrowedBookCard>)
                }
             </div>
        </div>
    );
};

export default BorrowBooks;