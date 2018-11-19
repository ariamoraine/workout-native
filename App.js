import React, { Component } from 'react';
import { View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import SingleDay from './screens/SingleDay'

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    DayDetail: { screen : SingleDay }
  },
  {
    initialRouteName: 'Home',
  }
)

export default createAppContainer(AppNavigator)