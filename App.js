import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.totalReps = 4;
    this.completedRep = 0;
    this.days = 3;
    this.currentDay = 1;

  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Get your workout on!</Text>
        <Text>{`Today is day ${this.currentDay}`} YAY!</Text>
      </View>
    );
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
