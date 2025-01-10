import React, { useEffect, useState } from 'react';
import RecomendedBookCard from '../RecomendedBookCard/RecomendedBookCard';

const RecomendedBooks = () => {
    const [books,setBooks]=useState([])
    useEffect(()=>{
        fetch('recomended_books.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div>
            <h1 className='text-center text-3xl md:text-4xl  text-blue-500 font-bold'> Popular or Recommended Books Section</h1>
           <div className='grid grid-cols-1 md:grid-cols-4 gap-8  mt-12 '>
           {
             books?.map((book, indx)=><RecomendedBookCard key={indx} book={book}></RecomendedBookCard>)
            }
           </div>
            
        </div>
    );
};

export default RecomendedBooks;
