import React from 'react';

const UserReview = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-10 my-10'>

          <div className='text-center space-y-2 border shadow-2xl rounded-xl px-4 py-4 hover:scale-105 transition-all'>
            <h2 className='text-2xl font-bold'>Md : Shaharia Hossain</h2>
            <p className='font-semibold'>location : Dhaka Motijil</p>
            <p>An amazing experience! The Library Management System is user-friendly, and I was able to find and borrow my books in no time. Highly recommend!</p>
          </div>

          <div className='text-center space-y-2 border shadow-2xl rounded-xl px-4 py-4 hover:scale-105 transition-all'>
            <h2 className='text-2xl font-bold'>Md :Mijanut Rahman</h2>
            <p className='font-semibold'>location : Dhaka Motijil</p>
            <p className='font-semibold'>The online catalog is easy to navigate, and I love being able to renew my books without any hassle. This system has made my life much easier!</p>
          </div>
            
          <div className='text-center space-y-2 border shadow-2xl rounded-xl px-4 py-4 hover:scale-105 transition-all'>
            <h2 className='text-2xl font-bold'>Md :Jihad Choudory</h2>
            <p className='font-semibold'>location : Dhaka Bonani</p>
            <p className='font-semibold'>The ability to check my account online and get reminders about due dates has been a game changer. I feel more organized now!</p>
          </div>
          <div className='text-center space-y-2 border shadow-2xl rounded-xl px-4 py-4 hover:scale-105 transition-all'>
            <h2 className='text-2xl font-bold'>Md :Mehedi Hasan</h2>
            <p className='font-semibold'>location : Uttora Dhaka</p>
            <p className='font-semibold'>I’ve been using this library for years, and the new system makes borrowing and returning books a breeze. Great service and easy access to resources</p>
          </div>
          <div className='text-center space-y-2 border shadow-2xl rounded-xl px-4 py-4 hover:scale-105 transition-all'>
            <h2 className='text-2xl font-bold'>Md :Hridoy Hasan</h2>
            <p className='font-semibold'>location : Dhanmondi Dhak</p>
            <p className='font-semibold'>The ability to check my account online and get reminders about due dates has been a game changer. I feel more organized now!</p>
          </div>
          <div className='text-center space-y-2 border shadow-2xl rounded-xl px-4 py-4 hover:scale-105 transition-all'>
            <h2 className='text-2xl font-bold'>Md :Hridoy Hasan</h2>
            <p className='font-semibold'>location : Dhanmondi Dhak</p>
            <p className='font-semibold'>The ability to check my account online and get reminders about due dates has been a game changer. I feel more organized now!</p>
          </div>
            
        </div>
    );
};

export default UserReview;