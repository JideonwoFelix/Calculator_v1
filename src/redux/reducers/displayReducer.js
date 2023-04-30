import { createSlice } from '@reduxjs/toolkit';


// const initialState = {
//     value: '0',
//   }
// export const calculator_displaySlice = createSlice({
//     name: 'calculator_display',
//     initialState: initialState.value,
//     reducers: {
//         // updateDisplay:(state, action)=>{
//         //   return action.payload
//         // }
//         updateDisplay: (state, action) => {
//           console.log('called inside action---->', action)
//           switch (action.payload.type) {
//             case 'ADD_TO_STRING':
//               console.log('called inside action proper---->')
//               return { ...state, calculator_display: state + action.payload };
//             case 'CLEAR_STRING':
//               return { ...state, value: '' };
//             case 'UPDATE_VALUE':
//               return action.payload;
//             default:
//               return state;
//           }
//         }
//     },
//   })
const initialState = {
    value: '0',
  }
export const calculator_displaySlice = createSlice({
  name: 'calculator_display',
  initialState: initialState,
  reducers: {
    updateDisplay: (state, action) => {
      switch (action.payload.type) {
        case 'ADD_TO_STRING':
          return { ...state, value: state.value + action.payload.value };
        case 'CLEAR_STRING':
          return { ...state, value: '0' };
        case 'UPDATE_VALUE':
          return { ...state, value: action.payload.value };
        default:
          return state;
      }
    }
  }
});

  
export const { updateDisplay } = calculator_displaySlice.actions

export default calculator_displaySlice.reducer

console.log('from reducer->',calculator_displaySlice.reducer({ value: 1 }, { type: 'ADD_TO_STRING', payload: '10' }));
// should output { value: 10 } 