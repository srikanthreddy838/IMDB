import React from 'react'

function Pagination({handlePrev,handleForw,pageNo}) {
  return (
    <div className='bg-gray-900/60 text-center flex justify-center p-4 m-4'>
     <div onClick={handlePrev} className='p-2 hover:cursor-pointer'> <i class="fa-solid fa-arrow-left"></i></div>
      <div className='p-2 font-bold'>{pageNo}</div>
     <div onClick={handleForw} className='p-2 hover:cursor-pointer '> <i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination
