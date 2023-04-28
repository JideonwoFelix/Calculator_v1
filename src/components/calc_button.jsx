import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {updateDisplay} from '../redux/reducers/displayReducer';
import { useDispatch } from 'react-redux';

export default function Calc_button({val}) {
  const dispatch = useDispatch();
  
  function clickDisplay(num) {
    console.log(num)
    dispatch(updateDisplay(num));

  }

  return (
    <View style={style.calc_button}>
      <Button onPress={()=>clickDisplay(val)} title={`${val}`}/>
    </View>
  )
}

const style = StyleSheet.create({
  calc_button:{
    backgroundColor: '#f00',
    color: '#f00',
    // padding: 50,
    // borderColor: "#20232a",
    // borderStyle: 'solid',
    width: '30%',
    marginVertical: 10,
  }
})
