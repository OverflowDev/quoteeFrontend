import {useState} from 'react'

import { toast } from 'react-hot-toast';

import { useMutation, gql } from '@apollo/client';

// import {FETCH_QUOTES_QUERY} from '../graphql/quoteQueries'
import {CREATE_QUOTE_MUTATION} from '../graphql/quoteMutation'

// import { useForm } from '../util/FormCallback';

import { FiSend } from "react-icons/fi";


function PostQuote() {

  const [err, setErr] = useState(null)

  // const { loading, data } = useQuery(FETCH_QUOTES_QUERY)

  // const {formData, onSubmit, onChange} = useForm(createQuoteCallback, {
  //   body: ''
  // })

  const [formData, setFormData] = useState({
    body: ''
  })

  const onChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}

  const [createQuote, {error}] = useMutation(CREATE_QUOTE_MUTATION, {
    // variables: formData,

    update(cache, { data: {createQuote} }) {
      cache.modify({
        fields: {
          getQuotes(existingQuotes = []) {
            const newQuoteRef = cache.writeFragment({
              data: createQuote,
              fragment: gql`
                fragment NewQuote on Quote{
                  id
                  body
                }
              `
            })
            return [newQuoteRef, ...existingQuotes]
            // formData.body = ''
          }
        }
      })
    }, 
    onCompleted(){
      toast.success("Quote saved successfully!")
    }
  })

  // function createQuoteCallback() {
  //   createQuote()
  // }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await createQuote({
        variables: { body: formData.body }
      });
      setFormData({ body: "" });
      setErr(null) // reset formData
    } catch (error) {
      setErr(error)
    }
  }

  return (
    <div>
      <form 
        onSubmit={onSubmit}
        className="bg-white shadow-lg shadow-lens/20 rounded-lg mb-6 p-4 w-full md:w-2/4"
      >
        {/* body  */}
        <textarea 
          name="body" 
          type='text'
          value={formData.body}
          onChange={onChange}
          // error={error ? true : false}
          placeholder="Type your quote here..." 
          className=" focus:outline-none resize-none overflow-hidden w-full rounded-lg p-4 text-sm bg-lens bg-opacity-20 border border-transparent appearance-none rounded-tg placeholder-gray-800"
        >
        </textarea>
        {/* Button  */}
        <div className="flex justify-end mt-2">
          <button 
            type='submit'
            className="flex items-center py-2 px-4 rounded-lg text-sm bg-lens/90 text-white shadow-lg"
          >
            <span className='space-x-1 flex items-center'>
              <i className='font-semibold tracking-widest'>Quote</i>
              <FiSend />
            </span>
          </button>
        </div>
      </form>
      {err && (
        <div className="bg-red-100 border border-red-500 text-red-700 px-4 py-3 rounded mt-2">
          {error?.graphQLErrors[0].message}
        </div>
      )}
    </div>
  )
}

export default PostQuote