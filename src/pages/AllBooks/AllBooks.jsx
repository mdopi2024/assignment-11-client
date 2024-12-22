import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Bookscard from '../../components/BooksCard/Bookscard';

const AllBooks = () => {
    const allBooks = useLoaderData()
    
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