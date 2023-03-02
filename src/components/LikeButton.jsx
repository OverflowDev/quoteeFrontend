import {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useMutation } from '@apollo/client'

import {LIKE_QUOTE_MUTATION} from '../graphql/quoteMutation'

import {CiHeart} from 'react-icons/ci'
import {AiTwotoneHeart} from 'react-icons/ai'
import { toast } from 'react-hot-toast'

function LikeButton({user, quote: {id, likeCount, likes}}) {

  const navigate = useNavigate()

    const [liked, setLiked] = useState(false)

    useEffect(() => {
      if(user && likes.find((like) => like.username === user.username)){
        setLiked(true)
      } else {
        setLiked(false)
      }
    }, [user, likes])

    const [likeQuote] = useMutation(LIKE_QUOTE_MUTATION, {
        variables: {quoteId: id},
        onCompleted(data){
            if (liked) {
              toast.success("Quote unliked!")
          } else {
              toast.success("Quote liked!")
          }
          setLiked(!liked)
        },
        onError: (error) => {
          // Redirect user to login page if they are not logged in
          if (
            error.message
            ) {
            toast.error('Login or Register first')
            navigate('/login')
          } else {
            console.log(error);
          }
        },
    })

  return (
    <div>
        <button 
            onClick={likeQuote}
            className='flex items-center space-x-2 text-gray-600 hover:border-red-400 py-2 px-3 hover:text-lime-500'>
            {user ? (
                liked ? (
                    <div>
                        <AiTwotoneHeart size={20} className='' />
                    </div>
                ) :(
                    <div>
                        <CiHeart size={20} className='' />
                    </div>
                )
            ) : (
                <Link to='/'>
                        <CiHeart size={20} className='' />
                </Link>
            )}
            <h1 className='text-sm font-semibold'>{likeCount}</h1>
        </button>
    </div>
  )
}

export default LikeButton