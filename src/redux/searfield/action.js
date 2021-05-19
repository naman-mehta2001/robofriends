import {CHANGE_SEARCHFIELD} from "./type"

export const setSearchField = (text) => {
    return {type: CHANGE_SEARCHFIELD, payload : text}
}