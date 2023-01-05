import { UPDATE_DISPLAY } from '../constants';

const initialState = {
    content: 0
};

const displayReducer = (state = initialState,  action) => {
    switch(action.type){
        case UPDATE_DISPLAY:
            return {
                ...state,
                count: action.payload
            };
        default: 
            return state;
    }
}