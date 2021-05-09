import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Scanner from './screen/scanner'
import Done from "./screen/done"

export default class App extends Component {
  render (){
    return(
               
      
        <AppContaner/>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const TabNavigator = createBottomTabNavigator({
  screen1: { screen:  Scanner },
  screen2: {screen: Done}
})
const AppContaner = createAppContainer(TabNavigator);

