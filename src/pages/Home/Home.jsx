import React from 'react';
import Sweeper from '../../components/Sweeper/Sweeper';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AboutUs from '../../components/AboutUs/AboutUs';
import UserReview from '../../components/UserReview/UserReview';
import DynamicTitle from '../../components/DynamicTitle/DynamicTitle';
import RecomendedBooks from '../../components/RecomendedBooks/RecomendedBooks';

const Home = () => {

   

    return (
        <div>
            <div>
                <DynamicTitle title='Home'></DynamicTitle>
            </div>

            <div className='  my-10'>
                <Sweeper></Sweeper>
            </div>
            <div className='my-10 mx-4 md:mx-10'>
                <h1 className='text-blue-500 md:text-4xl font-bold text-3xl text-center mb-8'> Book Categories</h1>

                <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>

                    <Link to='/category/e.g., Novel' >
                        <div className='h-[200px] sm:h-[220px]  text-center space-y-3 card  hover:scale-105 transition-all  bg-gray-200 shadow-xl'>
                            <h1 className=' text-2xl font-bold'>e.g., Novel</h1>
                            <p className=''>
                                A novel is a long fictional story with deep characters and themes, often in different genres. Examples include 1984 and Pride and Prejudice.</p>
                        </div>
                    </Link>
 
                    <Link to='/category/History'  >
                        <div className='h-[200px] sm:h-[220px]  text-center space-y-3 card hover:scale-105 transition-all bg-gray-200  shadow-xl'>
                            <h1 className='text-2xl font-bold'> History</h1>
                            <p className=''>
                                History is the study of past events, focusing on human actions, societies, and cultures. It helps us understand how the present world came to be, through examining records, artifacts etc.</p>
                        </div>
                    </Link>

                    <Link to='/category/Drama'  >
                        <div className='h-[200px] sm:h-[220px]  text-center space-y-3 card hover:scale-105 transition-all bg-gray-200  shadow-xl'>
                            <h1 className='text-2xl font-bold'> Drama</h1>
                            <p className=''>
                                Drama is a genre of fiction that focuses on intense, emotional stories, often exploring conflicts and human experiences. It is typically performed on stage or screen.</p>
                        </div>
                    </Link>

                    <Link to='/category/Sci-Fi' >
                        <div className='h-[200px] sm:h-[220px]  text-center space-y-3 card hover:scale-105 transition-all bg-gray-200  shadow-xl'>
                            <h1 className='text-2xl font-bold'> Sci-Fi</h1>
                            <p className=''>
                                Sci-Fi (Science Fiction) is a genre that explores futuristic concepts, advanced technology, space exploration, and imaginative worlds, often set in the future or in alternative realities.</p>
                        </div>
                    </Link>

                </div>

            </div>

            {/* recomended books */}
            <RecomendedBooks></RecomendedBooks>


         <div className='my-7'>
            <h1 className='text-center text-3xl md:text-4xl  text-blue-500 font-bold'>Know more about us</h1>
            <AboutUs></AboutUs>
         </div>

         <div>
         <h1 className='text-center text-3xl md:text-4xl  text-blue-500 font-bold'>What Our Users Say</h1>
            <UserReview></UserReview>
         </div>

        </div>
    );
};

export default Home;