import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <>
    <StatusBar style="auto" />
    <SafeAreaView>
      <HomeScreen></HomeScreen>
    </SafeAreaView>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;