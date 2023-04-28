import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    value: 0,
  }
export const calculator_displaySlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // updateDisplay:(state, action)=>{
        //   return action.payload
        // }
        updateDisplay: (state = initialState, action) => {
          switch (action.type) {
            case 'ADD_TO_STRING':
              return { ...state, counter: state.counter + action.payload };
            case 'CLEAR_STRING':
              return { ...state, counter: '' };
            case 'UPDATE_VALUE':
              return action.payload;
            default:
              return state;
          }
        }
    },
  })

  // Action creators are generated for each case reducer function
export const { updateDisplay } = calculator_displaySlice.actions

export default calculator_displaySlice.reducer