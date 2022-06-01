import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Men from './components/Men'
import Man from './components/Man'
import Women from './components/Women'
import product from './components/product'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Men /> */}
      {/* <Women /> */}
      {/* <Product /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: '#efefe9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
