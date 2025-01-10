import React from 'react';

const RecomendedBookCard = ({book}) => {
    const {description, title,author,imageUrl,rating}=book||{}
    console.log(book)
    return (
        <div className="card card-compact bg-base-100 hover:scale-105  shadow-xl transition-all ">
        <figure>
          <img
          className='h-[180px] object-cover w-full'
            src={imageUrl}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="font-semibold text-[18px]"> Book Name:<span className='text-gray-700'> {title}</span> </h2>
          <p className='font-bold'>Author Name : <span className='text-gray-700'>{author}</span></p>
          <p className='font-bold'>Rating : <span className='text-gray-700'>{rating}</span></p>
          <p className='font-bold'>Short Description : <span className='text-gray-700 text-sm font-normal'>{description}</span></p>
          
        </div>
      </div>
    );
};

export default RecomendedBookCard;