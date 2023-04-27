import React from 'react'

const Mainpicture = () => {
  return ( 
    <div className=''>
        <div className='h-[400px] w-[960px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 h-[400px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best place</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>to fix</span> car</h1>
            </div>
            <img className='w-[960px] h-[400px] object-cover' src="../../image/carfix.jpg" alt="/" />
        </div>
    </div>
  )
}

export default Mainpicture;