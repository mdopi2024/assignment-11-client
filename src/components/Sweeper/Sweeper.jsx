import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React from 'react';
import SliderCard from '../SliderCard/SliderCard';
import slider_1 from '../../assets/slider-1.jpg'
import slider_2 from '../../assets/slider-2.jpg'
import slider_3 from '../../assets/slider-3.jpg'

const Sweeper = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}

      className='h-[400px] md:h-[450px] bg-black bg-opacity-60 '
    >
      <SwiperSlide><SliderCard slider_1={slider_1} header={'Category of Books'} pera={"Discover a world of stories with our diverse collection of novels, thrillers, historical tales, dramas, and sci-fi adventures."}></SliderCard></SwiperSlide>
      <SwiperSlide><SliderCard slider_1={slider_2} header={'our exciting membership'} pera={"Unlock endless possibilities with our exciting membership plans—access a vast collection of books and exclusive library services today!"}></SliderCard></SwiperSlide>
      <SwiperSlide><SliderCard slider_1={slider_3} header={'Annual Book Fair'} pera={"We proudly present our Annual Book Fair, a celebration of books, authors, and reading. Join us for three days of literary exploration, author meet-and-greets, workshops, and exclusive book deals."}></SliderCard></SwiperSlide>
     

      ...
    </Swiper>
  );
};

export default Sweeper;