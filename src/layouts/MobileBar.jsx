import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'

import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare} from "react-icons/fi";
import { FaUser} from "react-icons/fa";

import AuthContext from '../context/AuthContext'

function MobileBar() {

  const {user} = useContext(AuthContext)


  return (
    <div className='flex justify-between items-center bg-white border-t border-gray-300 py-2 max-h-[4.4rem] px-6 rounded-t-xl'>
      <Link to='/'>
        <div className='flex flex-col items-center text-gray-500'>
          <MdOutlineDashboard className='h-6 w-6 mb-1' />
          <span className="text-xs">Home</span>
        </div>
      </Link>
      <Link>
        <div className='flex flex-col items-center text-gray-500'>
          <AiOutlineHeart className='h-6 w-6 mb-1' />
          <span className="text-xs">Saved</span>
        </div>
      </Link>
      <Link to='/profile'>
        {user ? (
          <div className='flex flex-col items-center text-gray-500'>
            <FaUser className='h-6 w-6 mb-1' />
            <span className="text-xs font-semibold uppercase">{user.username}</span>
          </div>
        ) : (
          <div className='flex flex-col items-center text-gray-500'>
            <AiOutlineUser className='h-6 w-6 mb-1' />
            <span className="text-xs">User</span>
          </div>
        )}
      </Link>
      <Link>
        <div className='flex flex-col items-center text-gray-500'>
          <RiSettings4Line className='h-6 w-6 mb-1' />
          <span className="text-xs">Settings</span>
        </div>
      </Link>
      <Link to='/messages'>
        <div className='flex flex-col items-center text-gray-500'>
          <FiMessageSquare className='h-6 w-6 mb-1' />
          <span className="text-xs">Messages</span>
        </div>
      </Link>
    </div>
  )
}

export default MobileBar