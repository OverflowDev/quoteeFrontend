import {useState} from 'react'
import {Link} from 'react-router-dom'

import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare} from "react-icons/fi";


function MobileBar() {

  return (
    <div className='flex justify-between items-center bg-white border-t border-gray-300 py-2 max-h-[4.4rem] px-6 rounded-t-xl'>
      <Link>
        <div className='flex flex-col items-center text-gray-500'>
          <MdOutlineDashboard className='h-6 w-6 mb-1' />
          <span class="text-xs">Home</span>
        </div>
      </Link>
      <Link>
        <div className='flex flex-col items-center text-gray-500'>
          <AiOutlineHeart className='h-6 w-6 mb-1' />
          <span class="text-xs">Saved</span>
        </div>
      </Link>
      <Link>
        <div className='flex flex-col items-center text-gray-500'>
          <AiOutlineUser className='h-6 w-6 mb-1' />
          <span class="text-xs">User</span>
        </div>
      </Link>
      <Link>
        <div className='flex flex-col items-center text-gray-500'>
          <RiSettings4Line className='h-6 w-6 mb-1' />
          <span class="text-xs">Settings</span>
        </div>
      </Link>
      <Link>
        <div className='flex flex-col items-center text-gray-500'>
          <FiMessageSquare className='h-6 w-6 mb-1' />
          <span class="text-xs">Messages</span>
        </div>
      </Link>
    </div>
  )
}

export default MobileBar