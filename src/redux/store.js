import { configureStore } from '@reduxjs/toolkit';
import calculator_displaySlice from './reducers/displayReducer';
// import rootReducer from './reducers/reducers';

const store = configureStore({
  reducer: {
    calculator_display: calculator_displaySlice
  }
});

export default store;
