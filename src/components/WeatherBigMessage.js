import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Dimensions, Platform, PixelRatio } from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}


class WeatherBigMessage extends React.Component {
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
         <Text style={styles.bigtext}>
            {text}
         </Text>
        </View>
     );
  }
}
export default WeatherBigMessage;


const styles = StyleSheet.create({
  container: {
    flexBasis: 50,
    flexGrow: 1
  },
  bigtext: {
    padding: 15,
    fontSize: normalize(45),
    fontWeight: '600',
    letterSpacing: 4,
    fontFamily: 'HelveticaNeue-Light',
    color: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    textAlignVertical: 'bottom'
  },
  hilight: {
    color: "#ff0000",
    fontWeight: '800',

  }
});
