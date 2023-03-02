import {useState, useContext} from 'react'

import moment from 'moment/moment';

import {AiFillDelete} from 'react-icons/ai'
import {VscCommentDiscussion} from 'react-icons/vsc'

import AuthContext from '../context/AuthContext';
import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';
import { Link } from 'react-router-dom';

function Quotes({quote}) {
    const [showDeleteButton, setShowDeleteButton] = useState(false)
    const handleOnClose = () => setShowDeleteButton(false)

    const {user} = useContext(AuthContext)

    const {
        id,
        username,
        body,
        createdAt,
        commentCount
    } = quote

  return (
    <div className='mt-2 w-full '>
        <Link to={`/quote/${id}`} key={id}>
            <div className="bg-gray-100 hover:bg-lens/5 rounded-lg p-4 w-full md:w-3/4 inline-block">
                <div className="flex flex-row px-2 py-3 mx-3">
                    <div className="w-auto h-auto rounded-full">
                        <img className="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80" />
                    </div>
                    <div className="flex flex-col mb-2 ml-4 mt-1">
                        <div className="text-gray-600 text-sm font-semibold uppercase">{username}</div>
                        <div className="flex w-full mt-1">
                            <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">
                                QUOTEER
                            </div>
                            <div className="text-gray-600 font-thin text-xs">
                                • {moment(createdAt).fromNow(true)}
                            </div>
                        </div>
                    </div>
                </div>
                {/* body  */}
                <div>
                    <h1>
                        {body}
                    </h1>
                </div>
            </div>
        </Link>
            <div className='bg-gray-50 mt-1 p-2 mb-6 w-full md:w-3/4'>

                {/* Buttons  */}
                <div className='flex items-center justify-between space-x-3'>
                    <div className='flex items-center gap-x-12'>
                        <div className=''>
                            <LikeButton user={user} quote={quote} />
                        </div>
                        <Link to={`/quote/${id}`}>
                            <button className='flex items-center space-x-2 text-gray-600 hover:text-lime-500'>
                                <VscCommentDiscussion size={18} className='' />
                                <h1 className='text-sm font-semibold'>{commentCount}</h1>
                            </button>
                        </Link>
                    </div>
                    {/* delete  */}
                    <div>
                        {user && user.username === username && 
                            <button 
                                onClick={() => setShowDeleteButton(true)}
                                className='flex items-center space-x-2 text-red-600'>
                                <AiFillDelete size={18} className='' />
                            </button>
                        }
                    </div>
                </div>
            </div>
        {/* </Link> */}
        {/* DeleteButton  */}
        <DeleteButton onClose={handleOnClose} visible={showDeleteButton} quoteId={id}/>
    </div>
  )
}

export default Quotes