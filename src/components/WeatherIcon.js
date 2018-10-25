import React from 'react';
import { StyleSheet, Text, View,   Image } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import image from './icon/white/clear_day.png';

class WeatherIcon extends React.Component {

  constructor (props) {
      super(props)

      this.state = {
        temperature: props.temperature
      }
  }

  render() {
    return (
         <View style={styles.iconContainer}>
               <AutoHeightImage
                width={100}
                source={require('./icon/white/clear_day.png')} />
         </View>
     );
  }
}

export default WeatherIcon;

const styles = StyleSheet.create({
  iconContainer: {
      marginTop: 50,
      marginLeft: 30,

  }
});
