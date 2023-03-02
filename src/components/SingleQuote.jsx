import {useContext, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import moment from 'moment/moment';
import { Triangle } from  'react-loader-spinner' 

import {FETCH_QUOTE_QUERY} from '../graphql/quoteQueries'
import { useQuery } from '@apollo/client'

import {AiFillDelete} from 'react-icons/ai'
import {VscCommentDiscussion} from 'react-icons/vsc'

import Sidebar from '../layouts/Sidebar'
import Comments from './Comments'
import CreateComments from './CreateComments'
import DeleteButton from './DeleteButton';


import AuthContext from '../context/AuthContext'
import LikeButton from './LikeButton';

function SingleQuote() {

    const [showDeleteButton, setShowDeleteButton] = useState(false)
    const handleOnClose = () => setShowDeleteButton(false)

    const param = useParams()
    const quoteId = param.quoteId

    const navigate = useNavigate()

    const {user} = useContext(AuthContext)

    const {data, loading, error} = useQuery(FETCH_QUOTE_QUERY, {
        variables: {
            quoteId
        }
    })

    function deleteQuoteCallback() {
        navigate('/')
    }
    
    const quote = data && data.getQuote

    if (error) console.log(error)

  return (
        <div className='flex md:px-24 px-6 mt-4 font-quicksand'>
            {/* Siderbar  */}
            <div className='md:flex md:fixed md:left-24 hidden'>
            <Sidebar />
            </div>
            {/* Main  */}
                <div className='md:ml-72 w-full'>
                    {/* Main Quote */}
                    {loading ?(
                        <div className='flex items-center justify-center'>
                            <Triangle
                            height="80"
                            width="80"
                            color="#4fa94d"
                            ariaLabel="triangle-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                            />
                        </div>
                    ) : (
                        <div>
                            <div className="bg-gray-100 hover:bg-lens/5 rounded-lg mb-6 p-4 w-full md:w-3/4">
                                <div className="flex flex-row px-2 py-3 mx-3">
                                    <div className="w-auto h-auto rounded-full">
                                        <img className="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80" />
                                    </div>
                                    <div className="flex flex-col mb-2 ml-4 mt-1">
                                        <div className="text-gray-600 text-sm font-semibold uppercase">{quote.username}</div>
                                        <div className="flex w-full mt-1">
                                            <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">
                                                SEO
                                            </div>
                                            <div className="text-gray-600 font-thin text-xs">
                                                • {moment(quote.createdAt).fromNow(true)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* body  */}
                                <div>
                                    <h1>
                                        {quote.body}
                                    </h1>
                                </div>

                                {/* Buttons  */}
                                <div className='flex items-center justify-between mt-3 space-x-3'>
                                    <div className='flex items-center gap-x-12'>
                                        <LikeButton user={user} quote={quote} />
                                        <button className='flex items-center space-x-2 text-gray-600 hover:text-lens'>
                                            <VscCommentDiscussion size={18} className='' />
                                            <h1 className='text-sm font-semibold'>{quote.commentCount}</h1>
                                        </button>
                                    </div>
                                    {/* delete  */}
                                    <div>
                                        {user && user.username === quote.username && 
                                            <button 
                                                onClick={() => setShowDeleteButton(true)}
                                                className='flex items-center space-x-2 text-red-600 py-2 px-3 border rounded bg-gray-300 hover:bg-gray-200'>
                                                <AiFillDelete size={18} className='' />
                                            </button>
                                        }
                                    </div>
                                </div>
                            </div>
                            {/* Comments  */}
                            <div>
                                {user && (<CreateComments />)}
                                <h1 className='font-semibold text-2xl'>Comments</h1>
                                {quote.comments.map((comment) => (
                                    <Comments key={comment.id} user={user} comment={comment} quoteId={quote?.id}  />
                                ))}
                            </div>
                        </div>
                    )}

                </div>

            {/* Delete button  */}
            <DeleteButton onClose={handleOnClose} visible={showDeleteButton} quoteId={quote?.id} callback={deleteQuoteCallback} />
        </div>
  )
}

export default SingleQuote