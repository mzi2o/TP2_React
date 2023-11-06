import React, { useState } from 'react';
import { SliderData } from './SlideData';

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };


  return (
    <>
      <h2>you are in the {current} image</h2><br/>
      <section className='slider'>

        <input type='button' className='left-arrow' onClick={prevSlide} value="<" />
        <input type='button' className='right-arrow' onClick={nextSlide} value=">" />

        {SliderData.map((slide, index) => (

            <div  key={index}>
              {index === current && <img src={slide} alt='travel' className='hi' />}
            </div>

        ))}
      </section>
    </>
  );
};

export default Slider;
