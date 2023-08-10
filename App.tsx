import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CounterScreen from './src/Screens/CounterScreen'
import CounterCustomSet from './src/Components/CounterCustomSet'

const App = () => {
  
  const [customValueParentState, setCustomValueParentState] = useState('1')

  return (
   <View style={styles.container}>
    <CounterScreen customValueParentState={customValueParentState}/>
    <CounterCustomSet setCustomValueParentState={setCustomValueParentState}/>
   </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  }
})