import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button,Alert, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.square1} backgroundColor='red'>
      <Text>Square</Text>
      </View>
      <View style={styles.square2} backgroundColor='blue'>
      <Text>Square</Text>
      </View>
      <View style={styles.square3} backgroundColor='green'>
      <Text>Square</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    height:'100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
  },
  square1: {
    margin: 5,
    height: 150,
    width: 150,
    backgroundColor: '#732459',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square2: {
    margin: 5,
    height: 150,
    width: 150,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square3: {
    margin: 5,
    height: 150,
    width: 150,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});