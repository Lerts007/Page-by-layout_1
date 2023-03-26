import React from 'react';
import '../css/BackgroundBall.css'

const BackgroundBall = () => {
  return (
    <div id="backgroundBall">
      <div className='redLight'></div>
      <div className='redBall'></div>
      <div className='purpleBall'></div>
      <div className='redMinBall'></div>
      <div className='purpleLight'></div>
    </div>
  );
};

export default BackgroundBall;