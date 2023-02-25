const authReducer = (state, action) => {

    if(action.type === "LOGIN_SUCCESS") {
        return {
            ...state,
            user: action.payload
        }
    }
    if(action.type === "LOGOUT") {
        return {
            ...state,
            user: null
        }
    }

    return state
}

export default authReducer