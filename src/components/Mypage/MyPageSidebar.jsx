import React, { useState } from 'react'

const MyPageSidebar = () => {
    
  const [open, setOpen] = useState(false)


  return (
    <div className='bg-white py-3 fixed top-0 left-0 right-0 '>
      <button className='ml-4' onClick={() => setOpen(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

    {/* open시 크기 조절 부분 여기로 하시면될거같아요 */}
      <div className={`${open ? "w-80" : "w-0"} bg-blue-500 min-h-screen fixed top-0 left-0 transition-all duration-300`}>
        <div className={`${!open && "hidden"} pt-3`}>
          <button className='ml-4 text-white mb-14' onClick={() => setOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className='text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>Link 1</div>
          <div className='text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>Link 2</div>
          <div className='text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>Link 3</div>
        </div>
      </div>
    </div>
  )
}

export default MyPageSidebar