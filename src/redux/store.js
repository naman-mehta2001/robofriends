import { createStore,applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger"
import ReduxThunk from "redux-thunk"


const store =createStore(rootReducer,applyMiddleware(logger,ReduxThunk))
export default store