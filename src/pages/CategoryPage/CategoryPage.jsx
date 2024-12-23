import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookCategoryCard from '../../components/BookCategoryCard/BookCategoryCard';

const CategoryPage = () => {
    const { category } = useParams()
    const [books , setBooks]=useState([])

    useEffect(() => {
        try {
            axios.get(`${import.meta.env.VITE_URL}/books_category/${category}`)
                .then(data => {
                    setBooks(data.data)
                })

        }
        catch (error) { console.log(error) }
    }, [category])


   


    return (
        <div className=''>
            <h1 className='text-center font-bold text-3xl md:text-4xl my-6'>Book Category {category}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-10 my-16'>
                {
                    books.map(book=><BookCategoryCard key={book._id} book={book}></BookCategoryCard>)
                }
            </div>
        </div>
    );
};

export default CategoryPage;