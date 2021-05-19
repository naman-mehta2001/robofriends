import {combineReducers} from "redux"
import searchFieldReducer from "./searfield/searchFieldReducer"
import userReducer from "./user/userReducer"

const rootReducer = combineReducers({
    searchField : searchFieldReducer, user : userReducer
})
export default rootReducer