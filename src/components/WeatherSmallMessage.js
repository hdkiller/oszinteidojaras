import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class WeatherSmallMessage extends React.Component {
  constructor (props) {
      super(props)

      this.state = {
        message: props.message
      }
  }


  render() {

    text = this.props.message

    return (
        <View style={styles.container}>
            <Text style={styles.smalltext}> {text} </Text>
         </View>
     );
  }
}

export default WeatherSmallMessage;

const styles = StyleSheet.create({
  container: {
  },
  smalltext: {
    padding: 15,
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 1,
    fontFamily: 'HelveticaNeue-Light',
    color: '#ffffff',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
});
