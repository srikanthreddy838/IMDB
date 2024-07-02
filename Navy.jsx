import React from 'react'
import logo from '../Movielogo.png'
import {Link} from 'react-router-dom'
function Navy() {
  return (
    
    <div className ='flex border space-x-5 items-center pl-3 py-4'>
        <img className = 'w-[50px]'src={logo} alt="" />
        <Link className='text-blue-600 text-2xl font-bold' to="/">Home</Link>
        <Link  className='text-blue-600 text-2xl font-bold' to="/watchlist">Watchlist</Link>

    </div>
  )
}

export default Navy
