import { useContext } from 'react';
import { Triangle } from  'react-loader-spinner' 

import { useQuery } from '@apollo/client';

import {FETCH_QUOTES_QUERY} from '../graphql/quoteQueries'

import Sidebar from '../layouts/Sidebar'

import PostQuote from '../components/PostQuote';
import Quotes from '../components/Quotes';
import AuthContext from '../context/AuthContext';

function Home() {

  const {user} = useContext(AuthContext)

  const {data, loading, error} = useQuery(FETCH_QUOTES_QUERY)

  if (error) console.log(error)

  return (
    <div className='flex md:px-24 px-6 mt-4 font-quicksand'>
      {/* Siderbar  */}
      <div className='md:flex md:fixed md:left-24 hidden'>
        <Sidebar />
      </div>
      {/* Main  */}
      <div className='md:ml-72 w-full'>
        {user && <PostQuote />}
        {loading ? (
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
        ): (
          <div>
            {data?.getQuotes?.length > 0 ? (
              <div>
                {data?.getQuotes.map((quote) => (
                  <Quotes key={quote.id} quote={quote}  />
                ))}
              </div>
            ) : (
              <div>
                No quote at the moment
              </div>
            )}
          </div>
        )}
      </div>

    </div>
  )
}

export default Home