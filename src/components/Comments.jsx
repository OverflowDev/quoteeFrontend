import React from 'react'

import {AiFillDelete} from 'react-icons/ai'

function Comments({user, comment}) {

    const {
        id,
        username,
        body,
        createdAt
    } = comment

  return (
    <div className=''>
        <div className="bg-gray-100 hover:bg-lens/5 rounded-lg mb-6 p-4 w-full md:w-2/4">
            <div className="flex flex-row px-2 py-3 mx-3">
                <div className="w-auto h-auto rounded-full">
                    <img className="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80" />
                </div>
                <div className="flex flex-col mb-2 ml-4 mt-1">
                    <div className="text-gray-600 text-sm font-semibold uppercase">{username}</div>
                    <div className="flex w-full mt-1">
                        <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">
                            SEO
                        </div>
                        <div className="text-gray-600 font-thin text-xs">
                            • 30 seconds ago
                        </div>
                    </div>
                </div>
            </div>
            {/* body  */}
            <div>
                <h1>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci eos dolores nemo deleniti optio ipsam mollitia eius, iste consectetur cupiditate sunt assumenda rem laborum, expedita illum possimus corrupti porro natus?
                </h1>
            </div>
            {/* Buttons  */}
            <div className='flex items-center justify-end mt-3 space-x-3'>
                {/* delete  */}
                {/* {user && user.username === username && ( */}
                    <div>
                        <button className='flex items-center space-x-2 text-red-600'>
                            <AiFillDelete size={18} className='' />
                        </button>
                    </div>
                {/* )} */}
            </div>
        </div>
    </div>
  )
}

export default Comments