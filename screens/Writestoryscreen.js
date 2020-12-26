import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';
import firebase from 'firebase';
import db from '../Config';

export default class Writestory extends React.Component{
    render(){
        return(
         <View>
         
         <Header
          backgroundColor={'#123456'}
          centerComponent={{
            text: 'Write A Story',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
         <TextInput placeholder = "Title of the Story" style = {styles.input1}></TextInput>
         <TextInput placeholder = "Author of the Story" style = {styles.input1}></TextInput>
         <TextInput placeholder = "Write a Story"
         multiline style = {styles.input2}></TextInput>
      <TouchableOpacity onPress = {this.submit, this.notif} style = {styles.button1}>
          <Text>Submit</Text>
      </TouchableOpacity>
         </View>
        );
    }
    submit=()=>{
    db.collection("Story").doc("Story").update({
      'Story' : ""
    })
    }
    notif=()=>{
  alert("Story has been submitted")
    }
}

const styles = StyleSheet.create({
  input1 : {
    height:40,
        width:200,
        borderWidth:3,
        marginTop:20,
        marginBottom:20,
        textAlign:"center",
        marginLeft:608
  },
  input2 : {
    height:250,
        width:500,
        borderWidth:3,
        marginTop:20,
        marginBottom:20,
        textAlign:"center",
        marginLeft:470
  },
  button1 : {
    backgroundColor:"white",
    width:120,
    height:40,
    marginTop:20,
    marginBottom:30,
    textAlign : "center",
    justifyContent : "center",
    borderWidth:3,
    borderRadius:50,
    marginLeft:608
    
},
text1 :{
    fontSize:20,
    fontWeight:"bold",
  
},
  
})