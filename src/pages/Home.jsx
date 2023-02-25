import { useContext } from 'react';

import Sidebar from '../layouts/Sidebar'

import PostQuote from '../components/PostQuote';
import Quotes from '../components/Quotes';
import AuthContext from '../context/AuthContext';

function Home() {

  const {user} = useContext(AuthContext)

  // const {Loading, error, data} = useQuery(GET_ALL_QUOTES, {
  //   variables: {}
  // })

  return (
    <div className='flex md:px-24 px-6 mt-4 font-quicksand'>
      {/* Siderbar  */}
      <div className='md:flex md:fixed md:left-24 hidden'>
        <Sidebar />
      </div>
      {/* Main  */}
      <div className='md:ml-72 w-full'>
        {user && <PostQuote />}
        <Quotes  />
      </div>

    </div>
  )
}

export default Home