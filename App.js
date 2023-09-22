import React from 'react';
import { Text, SafeAreaView, StyleSheet,View } from 'react-native';
import Dashboard from './screens/Dashboard';
import Feed from './screens/Feed';
import LoginScreen from './screens/LoginScreen';
import Register from './screens/Register';


export default class App extends React.Component{
    render(){
  return (
    <View style={styles.container}>
     <Feed/>
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});
