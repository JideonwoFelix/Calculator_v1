import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Calc_button from '@components/calc_button';
import DisplayBox from './src/components/display-box';
import { Provider } from 'react-redux';
import store from './src/redux/store'

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

  

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Calculator</Text>
        <DisplayBox/>
        <View style={styles.calc_grid}>
          <Calc_button val={1}/>
          <Calc_button val={2}/>
          <Calc_button val={3}/>
          <Calc_button val={4}/>
          <Calc_button val={5}/>
          <Calc_button val={6}/>
          <Calc_button val={8}/>
          <Calc_button val={9}/>
          <Calc_button val={0}/>
          <Calc_button val={'='}/>
          <Calc_button val={'DEL'}/>
          <Calc_button val={'CLEAR'}/>
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  calc_grid:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // backgroundColor: '#ffa',
  }
});
