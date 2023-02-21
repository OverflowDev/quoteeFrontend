import {useState} from 'react'

import { FiSend } from "react-icons/fi";


function PostQuote() {

    const [body, setBody] = useState('')

    const handleChange = (event) => {
      setBody(event.target.value)
    }

  return (
    <div>
      <form className="bg-white shadow-lg shadow-lens/20 rounded-lg mb-6 p-4 w-full md:w-2/4">
        {/* body  */}
        <textarea 
          name="message" 
          value={body}
          onChange={handleChange}
          placeholder="Type something..." 
          className=" focus:outline-none resize-none overflow-hidden w-full rounded-lg p-4 text-sm bg-lens bg-opacity-20 border border-transparent appearance-none rounded-tg placeholder-gray-800"
        >
        </textarea>
        {/* Button  */}
        <div className="flex justify-end mt-2">
          <button className="flex items-center py-2 px-4 rounded-lg text-sm bg-lens/90 text-white shadow-lg">
            <span className='space-x-1 flex items-center'>
              <i className='font-semibold tracking-widest'>Quote</i>
              <FiSend />
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default PostQuote