import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Calc_button({val}) {
  return (
    <Text style={style.calc_button onPress={}}>{val}</Text>
  )
}

const style = StyleSheet.create({
  calc_button:{
    backgroundColor: '00f',
    padding: 50
  }
})