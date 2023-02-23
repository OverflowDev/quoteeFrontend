import Sidebar from '../layouts/Sidebar'

import PostQuote from '../components/PostQuote';
import Quotes from '../components/Quotes';
import MobileBar from '../layouts/MobileBar';

function Home() {

  return (
    <div className='flex md:px-24 px-6 mt-4 font-quicksand'>
      {/* Siderbar  */}
      <div className='md:flex md:fixed md:left-24 hidden'>
        <Sidebar />
      </div>
      {/* Main  */}
      <div className='md:ml-72 w-full'>
        <PostQuote />
        <Quotes />
      </div>
      {/* tailwind fix a navbar to the bottom like twitter */}
      {/* <div class="fixed bottom-0 left-0 right-0 ">
        <MobileBar />
      </div> */}

    </div>
  )
}

export default Home