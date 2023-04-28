import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';


export default function DisplayBox() {
  const display_val = useSelector((state) => state.counter);
  console.log(display_val)
  return (
    <Text style={style.display_box}>{display_val}</Text>
  )
}

const style = StyleSheet.create({
  display_box: {
    marginTop: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    width: 320
  },
})