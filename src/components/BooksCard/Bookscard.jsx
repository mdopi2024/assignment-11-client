import React from 'react';
import { Link } from 'react-router-dom';

const Bookscard = ({book}) => {
    const {author_name,short_des,photo,quantity,name,_id}=book ||{}
 
    return (
        <div className="card card-compact bg-base-100 hover:scale-105   shadow-xl transition-all ">
        <figure>
          <img
          className='h-[180px] object-cover w-full'
            src={photo}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="font-semibold text-[18px]"> Book Name:<span className='text-gray-700'> {name}</span> </h2>
          <p className='font-bold'>Author Name : <span className='text-gray-700'>{author_name}</span></p>
          <p className='font-bold'>Quantity : <span className='text-gray-700'>{quantity}</span></p>
          <p className='font-bold'>Short Description : <span className='text-gray-700 text-sm font-normal'>{short_des}</span></p>
          <div className="">
            <Link to={`/update/${_id}`}  className="btn hover:bg-green-600   w-full bg-green-500 ">Update</Link >
          </div>
        </div>
      </div>
    );
};

export default Bookscard;