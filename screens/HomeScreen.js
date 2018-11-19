import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Workouts from '../workoutData'

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);

    this.totalReps = 4;
    this.completedRep = 0;
    this.days = [1, 2, 3];
    this.currentDay = 1;
    this.workout = Workouts;
  }

  goToDay(dayNum) {
    this.props.navigation.navigate('DayDetail', { workout: this.workout[dayNum], day: dayNum })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Get your workout on!</Text>
        {
          this.days.map((day, idx) => (
            <View key={`${day}-${idx}`}>
              <Text>{`Day ${day}`}</Text>
              <Button
                title={`Go to day ${day}`}
                onPress={() => this.goToDay(day)}
              />
            </View>
          ))
        }
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
