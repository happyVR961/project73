import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Readstory from './screens/Readstoryscreen';
import Writestory from './screens/Writestoryscreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import firebase from 'firebase';
import db from './Config';


export default function App() {
  return (
    
     <AppContainer/>
    
  );
}
const TabNavigator = createBottomTabNavigator({
  Read : Readstory,
  Write : Writestory
})
const AppContainer = createAppContainer(TabNavigator);

