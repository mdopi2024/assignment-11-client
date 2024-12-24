import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import BorrowedBookCard from '../../components/BorrowedBookCard/BorrowedBookCard';

const BorrowBooks = () => {
    const [books,setBooks]=useState([])
    console.log(books)
    const {user}=useAuth()
    useEffect(()=>{
        try{
            axios.get(`${import.meta.env.VITE_URL}/borrow?email=${user.email}`)
            .then(data=>{
                setBooks(data.data)
            })
        }catch(error){console.log(error)}

    },[user.email])
    return (
        <div>
            <h1 className='text-center text-3xl md:text-4xl font-bold my-8'>All Borrowed Books</h1>
             <div>
                {
                    books.map(book=><BorrowedBookCard key={book._id} book={book}></BorrowedBookCard>)
                }
             </div>
        </div>
    );
};

export default BorrowBooks;