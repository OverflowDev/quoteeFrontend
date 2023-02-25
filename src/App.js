import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Navbar from './layouts/Navbar'
import Home from './pages/Home'
import Login from './auth/Login';
import Register from './auth/Register';
import SingleQuote from './components/SingleQuote';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import MobileBar from './layouts/MobileBar';

import { AuthProvider } from './context/AuthContext';

function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/quotee'
  })

  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <Router>
          <div className='font-mynerve'>
            <div>
              <Navbar />
            </div>
            <div className='pb-16'>
              <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/login' exact element={<Login />} />
                <Route path='/register' exact element={<Register />} />
                <Route path='/quote/:quoteId' exact element={<SingleQuote />} />


                <Route path='/profile' exact element={<Profile />} />
                <Route path='/messages' exact element={<Messages />} />
                
              </Routes>
            </div>

            <div className="fixed bottom-0 left-0 right-0 md:hidden">
              <MobileBar />
            </div>
            
          </div>
        </Router>
      </ApolloProvider>
    </AuthProvider>
  );
}

export default App;
