import { createStore,applyMiddleware } from "redux";
import reducer from "./searfield/searchFieldReducer";
import logger from "redux-logger"
import ReduxThunk from "redux-thunk"

const store =createStore(reducer,applyMiddleware(logger,ReduxThunk))
export default store