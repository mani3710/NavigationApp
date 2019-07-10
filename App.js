import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Root from './src/Navigation/index';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }
export default class App extends Component {
  
  render() {
    return (
      <Root/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
