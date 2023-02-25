import {useState} from 'react'

import { useMutation, useQuery, gql } from '@apollo/client';

import {FETCH_QUOTES_QUERY} from '../graphql/quoteQueries'
import {CREATE_QUOTE_MUTATION} from '../graphql/quoteMutation'

import { useForm } from '../util/FormCallback';

import { FiSend } from "react-icons/fi";


function PostQuote() {

  const { loading, data } = useQuery(FETCH_QUOTES_QUERY)
  const getQuotes = data.getQuotes

  const {formData, onSubmit, onChange} = useForm(createQuoteCallback, {
    body: ''
  })

  const [createQuote, {error}] = useMutation(CREATE_QUOTE_MUTATION, {
    variables: formData,

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
          }
        }
      })
    }

  })

  function createQuoteCallback() {
    createQuote()
  }

  return (
    <div>
      <form 
        onSubmit={onSubmit}
        className="bg-white shadow-lg shadow-lens/20 rounded-lg mb-6 p-4 w-full md:w-2/4"
      >
        {/* body  */}
        <textarea 
          name="message" 
          value={formData.body}
          onChange={onChange}
          error={error ? true : false}
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
    </div>
  )
}

export default PostQuote