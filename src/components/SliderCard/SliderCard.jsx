import React from 'react';

const SliderCard = ({ slider_1, pera, header }) => {
    return (
        <div className=' flex justify-center items-center bg-blend-darken bg-[#00000060]' style={{ backgroundImage: `url(${slider_1})`, backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: '100%' }}>

            <div className='md:w-2/4 text-white  text-center '>

                <h1 className=' text-3xl md:text-4xl font-bold'>{header}</h1>
                <p className='font-bold mt-5 '>{pera}</p>
            </div>

        </div>
    );
};

export default SliderCard;
