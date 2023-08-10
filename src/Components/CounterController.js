import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CounterController = ({setCounterValue, customValueParentState}) => {

  const handleIncrement = () =>{
    setCounterValue((value)=>{
      return  parseInt(value) + parseInt(customValueParentState);
    });
  }
  const handleDecrement = () =>{
    setCounterValue((value)=>{
      return  value - customValueParentState;
    });

  }

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.btn} onPress={()=>handleDecrement()}>
        <Text style={styles.btntxt}>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={()=>handleIncrement()}>
        <Text style={styles.btntxt}>Increment</Text>
      </TouchableOpacity>

    </View>
  )
}

export default CounterController

const styles = StyleSheet.create({
  container:{
    
    backgroundColor:'#fff',
    flexDirection:'row',
    
  },
  btn:{
    backgroundColor:'#009EFA',
    padding:10,
    borderWidth:2,
    borderColor:'#CCC',
    borderRadius:10,
    elevation:10,
    margin:10
    
  },
  btntxt:{
    fontSize:24,
    fontWeight:'bold',
    color:'#fff'
  }
})