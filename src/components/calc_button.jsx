import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {updateDisplay} from '../redux/reducers/displayReducer';
import { useSelector, useDispatch } from 'react-redux';

export default function Calc_button({val}) {
  const dispatch = useDispatch();
  const display_val = useSelector((state) => state.calculator_display);
  let color_box;
  
  function clickDisplay(num) {
    // console.log(num)
    // console.log('displayed content->',display_val);
    if (num =='CLEAR') {
      dispatch(updateDisplay({
        type: 'CLEAR_STRING'
      }));
    } else if (num == 'DEL') {
      dispatch(updateDisplay({
        type: 'ADD_TO_STRING',
        value: num
      }));
    } else if (num == '=') {
       let calc_value = parseInt(display_val)
      dispatch(updateDisplay({
        type: 'UPDATE_VALUE',
        value: calc_value
      }));
    } else {
      dispatch(updateDisplay({
        type: 'ADD_TO_STRING',
        value: num
      }));
    }
  }
  
  if (val =='CLEAR') {
    color_box = '#000'
  } else if (val == 'DEL') {
    color_box = 'red'
  } else if (val == '=') {
    color_box = 'green'
  } else {
    color_box = '#00f'
  }
  console.log(color_box)
  return (
    <View style={style.calc_button}>
      <Button onPress={()=>clickDisplay(val)} title={`${val}`} color={color_box}/>
    </View>
  )
}

const style = StyleSheet.create({
  calc_button:{
    backgroundColor: 'red',
    color: '#f00',
    // padding: 50,
    // borderColor: "#20232a",
    // borderStyle: 'solid',
    width: '30%',
    marginVertical: 10,
  }
})
