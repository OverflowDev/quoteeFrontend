import { createContext, useReducer, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
// import { toast } from "react-hot-toast";

// import authReducer from './AuthReducer'

const AuthContext = createContext()


export const AuthProvider = ({children}) => {

  // const token = localStorage.getItem("jwtToken")

  // const initialState = {
  //   // user: null
  //   user: token ? jwtDecode(token) : null
  // }

  //   const [state, dispatch] = useReducer(authReducer, initialState)

  //   const login = (token) => {
  //       const decodedToken = jwtDecode(token);
  //       dispatch({
  //         type: 'LOGIN_SUCCESS',
  //         payload: decodedToken
  //       })
  //       localStorage.setItem('jwtToken', token);
  //     };
    
  //     const logout = () => {
  //       dispatch({
  //         type: "LOGOUT"
  //       })
  //       localStorage.removeItem('jwtToken');
  //     };
  const [user, setUser] = useState(null);

  const login = (token) => {
    const decodedToken = jwtDecode(token);
    setUser(decodedToken);
    localStorage.setItem("jwtToken", token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("jwtToken")
    // toast.success("Logout!")
  };

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("jwtToken");
      } else {
        setUser(decodedToken);
      }
    }
  }, []);



return (
    <AuthContext.Provider value={{ 
        user,
        login,
        logout
    }}>
        {children}
    </AuthContext.Provider>
    )

}

export default AuthContext