import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class WeatherCelsius extends React.Component {

  constructor (props) {
      super(props)

      this.state = {
        temperature: props.temperature
      }
  }

  render() {
    let temperature = -17;

    let temperatureSign = "\u00B0";

    return (
        <View style={styles.container}>
            <Text style={styles.celsius}>
            {this.props.temperature} {temperatureSign}
             </Text>
         </View>
     );
  }
}

export default WeatherCelsius;

const styles = StyleSheet.create({
  container: {
    flexBasis: 15,
    flexGrow: 1
  },
  celsius: {
    paddingLeft: 15,
    paddingBottom: 50,
    fontSize: 120,
    fontWeight: '500',
    letterSpacing: 0,
    fontFamily: 'HelveticaNeue-Light',
    color: '#eeeeee',
  },
  celsiusSign: {
    fontSize: 100
  }
});
