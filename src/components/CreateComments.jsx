import {useState, useRef} from 'react'

import { useMutation } from '@apollo/client'

import { toast } from 'react-hot-toast'

import {SUBMIT_COMMENT_MUTATION } from '../graphql/commentQueries'
import { useParams } from 'react-router-dom'

function CreateComments() {

    const param = useParams()
    const quoteId = param.quoteId
    
    const [comment, setComment] = useState('')
    const commentInputRef = useRef(null)

    
    const handleChange = (event) => {
      setComment(event.target.value)
    }

    const [handleCommentSubmit] = useMutation(SUBMIT_COMMENT_MUTATION, {
      variables: {
        quoteId,
        body: comment
      }, 
      update() {
        setComment('')
        commentInputRef.current.blur()
      }, 
      onCompleted(){
        toast.success("Comment successful!")
      }
    })

    const handleComment = (e) => {
      e.preventDefault()
      handleCommentSubmit()
    }


  return (
    <div>
        <form onSubmit={handleComment} className="mb-4 w-full md:w-2/4">
        {/* body  */}
        <textarea
          ref={commentInputRef}
          name="comment" 
          value={comment}
          onChange={handleChange}
          placeholder="Type Comment here..." 
          className=" focus:outline-none resize-none overflow-hidden w-full rounded-lg p-4 text-sm bg-lens bg-opacity-20 border border-transparent appearance-none rounded-tg placeholder-gray-800"
        >
        </textarea>
        {/* Button  */}
        <div className="flex justify-end mt-2">
          <button 
            type='submit'
            // onClick={handleCommentSubmit}
            disabled={comment.trim() === ''}
            className="flex items-center py-2 px-4 rounded-lg text-sm bg-lens/90 text-white shadow-lg"
          >
            <span className='space-x-1 flex items-center'>
              <i className='font-semibold tracking-widest'>Comment</i>
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateComments