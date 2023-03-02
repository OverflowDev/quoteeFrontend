import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink  } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'

import { Toaster } from 'react-hot-toast';

import Navbar from './layouts/Navbar'
import Home from './pages/Home'
import Login from './auth/Login';
import Register from './auth/Register';
import SingleQuote from './components/SingleQuote';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import MobileBar from './layouts/MobileBar';

import { AuthProvider } from './context/AuthContext';

import AuthRoute from './util/AuthRoute';
import NotFound from './pages/NotFound';
// import ProtectedRoute from './util/ProtectedRoute';

function App() {

  const httpLink = createHttpLink({
    uri: 'http://localhost:4000/quotee'
  })

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('jwtToken');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      }
    }
  })

  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getQuotes: {
            keyArgs: false,
            merge(existing = [], incoming) {
              return incoming;
            },
          },
        },
      },
    },
  })

  const client = new ApolloClient({
    // cache: new InMemoryCache(),
    // uri: 'http://localhost:4000/quotee'
    cache,
    link: authLink.concat(httpLink)
  })

  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <Toaster toastOptions={{ 
          duration: 4000
         }} />
        <Router>
          <div className='font-mynerve'>
            <div>
              <Navbar />
            </div>
            <div className='pb-16'>
              <Routes>
                <Route path='/' exact element={<Home />} />
                {/* <Route path='/login' exact element={<Login />} /> */}
                <Route 
                  path='/login' 
                  exact 
                  element={
                    <AuthRoute>
                        <Login />
                    </AuthRoute>
                  } 
                />
                <Route 
                  path='/register' 
                  exact 
                  element={
                    <AuthRoute>
                        <Register />
                    </AuthRoute>
                  } 
                />
                <Route path='/quote/:quoteId' exact element={<SingleQuote />} />


                <Route path='/profile' exact element={<Profile />} />
                <Route path='/messages' exact element={<Messages />} />

                <Route path='/*' element={<NotFound />} />
                
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
