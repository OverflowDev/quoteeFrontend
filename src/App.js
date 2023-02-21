import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './layouts/Navbar'
import Home from './pages/Home'
import Login from './auth/Login';
import Register from './auth/Register';
import SingleQuote from './components/SingleQuote';
import Profile from './pages/Profile';
import Messages from './pages/Messages';

function App() {
  return (
    <Router>
      <div className='font-mynerve'>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/quote' exact element={<SingleQuote />} />


          <Route path='/profile' exact element={<Profile />} />
          <Route path='/messages' exact element={<Messages />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
