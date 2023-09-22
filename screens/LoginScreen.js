import React from 'react';
import { Text, SafeAreaView, StyleSheet,View } from 'react-native';



export default class LoginScreen extends React.Component{
    render(){
  return (
    <View style={styles.container}>
        <Text style={styles.text}>LoginScreen</Text>
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
  text:{
    textAlign:"center",
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
   
  }

});
