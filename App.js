import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Calc_button from '@components/calc_button';

export default function App() {
  const features = [
    {id: 1, name: 'buy and sell'},
    {id: 2, name: 'chat with professionals on technical issues'},
    {id: 3, name: 'lore'},
    {id: 4, name: 'chat with professionals on technical issues'},
    {id: 6, name: 'chat with professionals on technical issues'},
    {id: 7, name: 'chat with professionals on technical issues'},
    {id: 8, name: 'chat with professionals on technical issues'},
  ]

  const display_val = 3
  

  return (
    <View style={styles.container}>
      <Text>Calculator</Text>
      {/* <TextInput 
        style={styles.display_box}
        placeholder='search'
        value={display_val}
      /> */}
      <Text style={styles.display_box}>{display_val}</Text>
      <View style={styles.calc_grid}>
          <View style={styles.grid_row}>
            <Calc_button val={1}/>
            <Calc_button val={2}/>
            <Calc_button val={3}/>
          </View>

          <View style={styles.grid_row}>
            <Calc_button val={4}/>
            <Calc_button val={5}/>
            <Calc_button val={6}/>
          </View>

          <View style={styles.grid_row}>
            <Calc_button val={8}/>
            <Calc_button val={9}/>
            <Calc_button val={0}/>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  calc_grid:{
    display: 'flex',
    backgroundColor: '#ffa'
  },
  grid_row: {
    display: 'flex',
    flexDirection: 'row'
  }
});
