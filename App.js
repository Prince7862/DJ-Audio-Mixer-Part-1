import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class App extends Component{
  
  
  render(){
    return(
      <View style={{width:200, height:100, marginTop: 80, marginLeft:80}}>
       <Button title="Sound 1" color="red" onPress={() => alert("Play Sound 1")}/>
       <Button title="Sound 2" color="blue" onPress={() => alert("Play Sound 2")}/>
       <Button title="Sound 3" color="purple" onPress={() => alert("Play Sound 3")}/>
       <Button title="Sound 4" color="green" onPress={() => alert("Play Sound 4")}/>
       </View>

       
    )
  }
}
