import axios from "axios"
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

export const fetchUsersRequest = () => {
    return {type : FETCH_USERS_REQUEST}
}
//here payload is passed as a prop
export const fetchUsersSuccess = (users) => {
    return {type : FETCH_USERS_SUCCESS, payload : users}
}
//here payload is passed as a prop
export const fetchUsersFailure = (error) => {
    return {type : FETCH_USERS_FAILURE, payload : error}
}
//uses thunk and returns another function instead of action and can have side effects and dispatch is its argument
export const fetchUsers = (dispatch) => {
    dispatch(fetchUsersRequest())
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => dispatch(fetchUsersSuccess(res.data)))
    .catch(err => dispatch(fetchUsersFailure(err.message)))
    return 
}