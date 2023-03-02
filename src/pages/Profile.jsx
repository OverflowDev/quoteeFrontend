import {useContext} from 'react'
import { Link } from 'react-router-dom'

import Sidebar from '../layouts/Sidebar'

import AuthContext from '../context/AuthContext'


function Profile() {

  const {user} = useContext(AuthContext)

  return (
    <div className='flex md:px-24 px-6 mt-4 font-quicksand'>
      {/* Siderbar  */}
      <div className='md:flex md:fixed md:left-24 hidden'>
          <Sidebar />
      </div>
      {/* Main  */}
      {user ? (
        <div className='md:ml-72 w-full'>
          <div className="bg-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="sm:flex sm:items-center px-6 py-4">
                  <img
                    className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-24 sm:h-32 rounded-full"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"
                    alt="Profile"
                  />
                  <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                    <h1 className="text-lg font-bold text-gray-900 uppercase">{user.name}</h1>
                    <p className="text-sm font-medium text-gray-600 capitalize">
                      {user.username}
                    </p>
                    <p className="text-sm font-medium text-gray-600">
                      {user.email}
                    </p>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h2 className="text-gray-800 font-bold mb-2">About me</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                    ac faucibus libero. Duis commodo dolor a quam iaculis, eu lacinia
                    magna maximus. Donec mollis finibus est, sed commodo risus.
                    Aenean vel ullamcorper leo. Etiam et erat eget massa venenatis
                    imperdiet. Morbi et enim ultricies, vehicula mi ac, vestibulum
                    nulla. Morbi malesuada bibendum ante, in semper velit viverra
                    sed.
                  </p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4">
                  <h2 className="text-gray-800 font-bold mb-2">Experience</h2>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Senior Software Engineer at XYZ Corp (2018 - present)</li>
                    <li>Software Engineer at ABC Inc. (2015 - 2018)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='md:ml-72 w-full flex items-center justify-center'>
          <Link to='/login' className='py-2 px-3 bg-lime-200 hover:bg-lime-100 rounded'>Login</Link>
        </div>
      )}
    </div>
  )
}

export default Profile