import React from 'react'
import Sidebar from '../layouts/Sidebar'

function Messages() {
  return (
    <div className='flex md:px-24 px-6 mt-4 font-quicksand'>
    {/* Siderbar  */}
    <div className='md:flex md:fixed md:left-24 hidden'>
        <Sidebar />
    </div>
    {/* Main  */}
    <div className='md:ml-72 w-full'>
        Profile
    </div>
</div>
  )
}

export default Messages