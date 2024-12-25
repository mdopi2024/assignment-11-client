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
    
    return (
        <div>
          <div className='my-16 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4   mx-5 md:mx-10'>
          {
            allBooks.map(book=><Bookscard key={book._id} book={book}></Bookscard>)
           }
          </div>
        </div>
    );
};

export default AllBooks;