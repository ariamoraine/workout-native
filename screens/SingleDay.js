import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class SingleDay extends Component {
  static navigationOptions = {
    title: 'Day Detail',
  };
 
  render() {
    console.log('props', this.props.navigation.state.params)
    const { day, workout } = this.props.navigation.state.params
    return(
      <View>
        <Text>{`Day ${day}`}</Text>
        {
          Object.values(workout).map(el => (
            <View>
              <Text key={el.name}>{el.name} {el.weight}lbs</Text>
            </View>
          ))
        }
      </View>
    )
  }
  
}