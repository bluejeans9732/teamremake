import React from 'react';

const UnderPicture = ({ onCarouselClick, onReviewClick, onNewsClick }) => {
  return (
    <div className='max-w-[1640px] mx-auto  py-12 grid md:grid-cols-3 gap-6'>
      

      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-semibold text-xl ml-4 pt-4'>베스트 매장</p>
          
            <button className='border-white ml-4 text-white absolute bottom-4'  onClick={onCarouselClick}>보러가기</button>
          
          
        </div>
        <img
        className='w-full object-cover rounded-xl'
          src='../../image/1.png'
          alt='/'
        />
      </div>


      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-semibold text-xl ml-4 pt-4'>베스트 리뷰</p>
          
            <button className='border-white ml-4 text-white absolute bottom-4' onClick={onReviewClick}>보러가기</button>
          
        </div>
        <img
        className='w-full object-cover rounded-xl'
          src='../../image/2.png'
          alt='/'
        />
      </div>
      

      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-semibold text-xl ml-4 pt-4'>정비 뉴스 정보</p>
          
            <button className='border-white ml-4 text-white absolute bottom-4' onClick={onNewsClick}>보러가기</button>
          
        </div>
        <img
        className='w-full object-cover rounded-xl'
          src='../../image/3.png'
          alt='/'
        />
      </div>
    </div>
  );
};

export default UnderPicture;