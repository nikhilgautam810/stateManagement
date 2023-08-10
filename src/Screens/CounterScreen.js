import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CounterView from '../Components/CounterView'
import CounterController from '../Components/CounterController'

const CounterScreen = ({customValueParentState}) => {
    const [counter, setCounter] = useState(0)
  return (
    <View style={styles.container}>
      <CounterView counterValue = {counter}/>
      <CounterController setCounterValue = {setCounter} customValueParentState={customValueParentState}/>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    }
    
})