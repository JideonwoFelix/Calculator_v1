import { createStore, combineReducers } from 'redux';
import displayReducer from '../reducers/displayReducer';


const rootReducer = combineReducers({ content: displayReducer });
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;