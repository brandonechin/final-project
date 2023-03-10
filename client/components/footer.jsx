import React from 'react';
import kalopsia from '../../images/kalopsia-footer.png';

export default function Footer() {
  return (
    <div className='bg-[#231f20] h-32 w-full flex'>
      <div>
        <img src={kalopsia} className="h-14 w-25 ml-4 mt-6"/>
        <h2 className='text-center text-white text-xs mt-4 ml-2'>© 2020 Kalopsia, Inc.</h2>
      </div>
      <div className='text-white ml-5 items-center flex text-xs'>
        <a className='mr-5' href='#'>About</a>
        <a className='mr-5' href='#'>Contact Us</a>
        <a href='#'>Returns & Exchanges</a>
      </div>
    </div>
  );
}
