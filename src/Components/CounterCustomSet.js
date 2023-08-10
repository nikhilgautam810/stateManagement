import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const CounterCustomSet = ({setCustomValueParentState}) => {
    const [customValue, setCustomValue] = useState('1')

const changeValueInState = (text) =>{
    setCustomValue(text);
    setCustomValueParentState(text);
}

  return (
    <View style={styles.container}>
    <TextInput value={customValue} style={styles.inputtxt} 
    onChangeText={(text)=>changeValueInState(text)}/>
    </View>
  )
}

export default CounterCustomSet

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center' ,
        backgroundColor:'#fff' 
      },
      inputtxt:{
        width:'80%',
        backgroundColor:'#fff',
        padding:15,
        fontSize:20,
        borderWidth:2,
        borderColor:'#ccc',
        borderRadius:10,
        elevation:10
        
      }
})