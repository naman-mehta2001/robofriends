import {CHANGE_SEARCHFIELD} from "./type"

const initialState = {
    searchField : ""
}
const reducer = (state=initialState,action={}) => {
    switch(action.type){
        case CHANGE_SEARCHFIELD : return {...state,searchField : action.payload };
        default : return state;
    }
}
export default reducer