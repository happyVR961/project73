import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Header} from 'react-native-elements'

export default class Readstory extends React.Component{
    render(){
        return(
         <View>
             
              <Header
          backgroundColor={"lightpink"}
          centerComponent={{
            text: 'Read A Story',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        
            
         </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });