import React from 'react';
import book from  "../../assets/about/about1.png"
import feature from  "../../assets/about/about2.png"
import commitment from  "../../assets/about/about3.png"

const AboutUs = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-10 mx-10'>
            <div className='text-center border shadow-2xl rounded-xl px-4 py-4 hover:scale-105 transition-all'>
                <div className='flex justify-center items-center'>
                    <img className='w-20' src={book} alt="" />
                </div>
                <h1 className='text-center font-bold text-2xl'>Purpose of the System</h1>
                <p className='mt-3'>Our Library Management System aims to transform the traditional library experience into a seamless and efficient digital platform, enabling students and librarians to focus on the joy of learning and discovery.</p>
            </div>

            <div className='text-center border shadow-2xl rounded-xl px-4 py-4 hover:scale-105 transition-all'>
                <div className='flex justify-center items-center'>
                    <img className='w-20' src={feature} alt="" />
                </div>
                <h1 className='text-center font-bold text-2xl'>Features and Benefits</h1>
              <div className='flex justify-center items-center text-left mt-3'>
              <ul className=' list-disc'>
                    <li>Online book search and reservation.</li>
                    <li>Borrowing and return tracking.</li>
                    <li>Notifications for overdue books.</li>
                    <li>Personalized borrowing history.</li>
                </ul>
              </div>
            </div>

            <div className='text-center border shadow-2xl rounded-xl px-4 py-4 hover:scale-105 transition-all'>
                <div className='flex justify-center items-center'>
                    <img className='w-20' src={commitment} alt="" />
                </div>
                <h1 className='text-center font-bold text-2xl'> Values and Commitment</h1>
                <p className='mt-3'>
                We are committed to fostering learning by making libraries more accessible and efficient, empowering students and educators to thrive.
                </p>
             
            </div>
        </div>
    );
};

export default AboutUs;
