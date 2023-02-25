import { createContext, useReducer, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

import authReducer from './AuthReducer'

const AuthContext = createContext()


export const AuthProvider = ({children}) => {
    // useEffect(() => {
    //   const storedToken = localStorage.getItem('jwtToken')
    //   if(storedToken) {
    //     const decodedToken = jwtDecode(storedToken)
    //     dispatch({
    //         type: "LOGIN_SUCCESS",
    //         payload: decodedToken
    //     })
    //   } else {
    //     dispatch({
    //         type: "LOGOUT"
    //     })
    //   }
    // }, [])
    const [user, setUser] = useState(null)

    const login = (token) => {
        const decodedToken = jwtDecode(token);
        setUser(decodedToken);
        localStorage.setItem('jwtToken', token);
      };
    
      const logout = () => {
        setUser(null);
        localStorage.removeItem('jwtToken');
      };

      useEffect(() => {
        const storedToken = localStorage.getItem('jwtToken');
        if (storedToken) {
          const decodedToken = jwtDecode(storedToken);
          setUser(decodedToken);
        }
      }, [])

    // const initialState = {
    //     user: null
    // }

    // const [state, dispatch] = useReducer(useReducer, initialState)

    // const login = (token) => {
    //     const decodedToken = jwtDecode(token)
    //     dispatch({
    //         type: "LOGIN_SUCCESS",
    //         payload: decodedToken
    //     })
    //     localStorage.setItem('jwtToken', token)
    // }

    // const logout = () => {
    //     dispatch({
    //         type: "LOGOUT"
    //     })
    //     localStorage.removeItem('jwtToken')
    // }


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