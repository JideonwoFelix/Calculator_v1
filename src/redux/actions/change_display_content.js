import { UPDATE_DISPLAY } from '../constants';

export function changeDisplayContnent  (content){
    return (
        type: UPDATE_DISPLAY,
        payload: content
    )
}