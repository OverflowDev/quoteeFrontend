
import { useContext } from 'react';
import { Navigate, BrowserRouter as Routes, Route, Router } from 'react-router-dom';
import  AuthContext  from '../context/AuthContext';

function AuthRoute({children}) {
  const { user } = useContext(AuthContext);
//   const navigate = useNavigate();

  return !user ? children : <Navigate to='/' />
}

export default AuthRoute;
