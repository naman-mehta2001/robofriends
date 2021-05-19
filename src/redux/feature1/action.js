import {CHANGE_SEARCHFIELD} from "./type"

export const searchField = (text) => {
    return {type: CHANGE_SEARCHFIELD, payload : text}
}