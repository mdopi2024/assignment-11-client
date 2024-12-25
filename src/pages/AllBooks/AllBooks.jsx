import React, { useEffect, useState } from 'react';
import Bookscard from '../../components/BooksCard/Bookscard';
import useAxiosSucure from '../../hooks/useAixosSecure/useAxiosSucure';

const AllBooks = () => {
    const [allBooks,setAllbooks]= useState([])
    const axiosSucure=useAxiosSucure()
    useEffect(()=>{
     axiosSucure.get(`${import.meta.env.VITE_URL}/books`)
      .then(data=>{
        setAllbooks(data.data)
      })
    },[])

    const handleAbailableBook=()=>{
      const filter =allBooks.filter(book=>book.quantity !==0)
      setAllbooks(filter)
    }
    
    return (
        <div>
          <div className='flex justify-end items-center px-10'>
            <button onClick={handleAbailableBook} className='btn border-2 border-green-500 hover:bg-green-600 font-bold mt-5 bg-white '>Show Available Books </button>
          </div>
          <div className='my-16 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4   mx-5 md:mx-10'>
          {
            allBooks.map(book=><Bookscard key={book._id} book={book}></Bookscard>)
           }
          </div>
        </div>
    );
};

export default AllBooks;