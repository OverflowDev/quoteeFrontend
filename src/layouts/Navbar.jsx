import {useContext} from 'react'
import { Link } from 'react-router-dom'

import AuthContext from '../context/AuthContext'

import {AiOutlineLogout} from 'react-icons/ai'

function Navbar() {

  const {user, logout} = useContext(AuthContext)

  const handleLogout = () => {
    logout()
  }

  return (
    // <div className='flex bg-black py-3 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60'>
    <div className='flex py-2 md:px-24 px-6'>
      <div className='flex items-center justify-between w-full'>
        {/* Logo  */}
        <Link to='/' className='font-bold tracking-wider'>
          QUOTEE
        </Link>
        {!user ? (
          <div className='flex items-center space-x-4'>
            <Link to='/login' className='py-2 px-3 bg-lime-200 hover:bg-lime-100 rounded'>
              Login
            </Link>
            <Link to='/register' className='py-2 px-3 bg-lime-400 hover:bg-lime-500 rounded'>
              Register
            </Link>
          </div>
        ) : (
          <div className='flex items-center space-x-4'>
            <div className='flex items-center space-x-1'>
              {/* Image  */}
              <img src="https://images.pexels.com/photos/15386480/pexels-photo-15386480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="quoteimage" className='object-cover object-contain h-8 w-8 rounded-full' />
              <div className='flex flex-col'>
                <h1 className='text-md tracking-widest font-semibold'>Overflow</h1>
                <h1 className='text-xs tracking-widest'>Overflow</h1>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className='py-2 px-3 bg-lime-50 rounded-md border border-lime-700 flex items-center space-x-3'
            >
              <AiOutlineLogout />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar