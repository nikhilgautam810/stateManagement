import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CounterView = ({counterValue}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{counterValue}</Text>
    </View>
  )
}

export default CounterView

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff'
  },
  txt:{
    fontSize:60,
    fontWeight:'bold',
    color:'#000',
    marginBottom:50,
    
  }
})