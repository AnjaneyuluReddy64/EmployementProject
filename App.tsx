import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  console.log('test');
  
  return (
    <View style={{backgroundColor:'red'}}>
      <Text>App</Text>
      <Text>App</Text>
      <Text style={{color:'green'}}>App</Text>
      <Text>App</Text>
      <Text>App</Text>
      <Text>App</Text>

    </View>
  )
}

export default App

const styles = StyleSheet.create({})