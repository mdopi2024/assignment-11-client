import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
    const { category } = useParams()

    useEffect(() => {
        try {
            axios.get(`${import.meta.env.VITE_URL}/books_category/${category}`)
                .then(data => {
                    console.log(data.data)
                })

        }
        catch (error) { console.log(error) }
    }, [category])


    return (
        <div>
            hello i am category {category}
        </div>
    );
};

export default CategoryPage;