import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import WeatherBigMessage from './src/components/WeatherBigMessage'
import WeatherSmallMessage from './src/components/WeatherSmallMessage'
import WeatherCelsius from './src/components/WeatherCelsius'
import WeatherIcon from './src/components/WeatherIcon'

import { API_KEY } from './config/OpenWeather.js'
import WeatherConditions from './src/utils/WeatherConditions.js'
import Phrases from './config/Phrases.json'


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
       temperature: 0,
       condition: "",
       isLoading: false,
       error: null,
       subline: "",
       message: "",
       color: "#FFFFFF"
    }
   }
  componentDidMount() {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        error => {
          this.setState({
            error: 'Error Gettig Weather Condtions'
          });
        }
      );

  }
  parsePhrases(condition, temperature) {

    var matches = [];
    condition = condition.toLowerCase();
    for(var i = 0; i < Phrases.phrases.length; i++) {
        var val = Phrases.phrases[i];
        if ( val.condition == condition ) {
            if (temperature > val.min && temperature < val.max) {
              matches.push(val);
            }
            if (typeof val.max == 'undefined' && temperature > val.min ) {
              matches.push(val);
            }
            if (typeof val.min == 'undefined' && temperature < val.max) {
              matches.push(val);
            }
        }
        if ( typeof val.condition == 'undefined') {
            if (temperature > val.min && temperature < val.max) {
              matches.push(val);
            }
            if (typeof val.max == 'undefined' && temperature > val.min ) {
              matches.push(val);
            }
            if (typeof val.min == 'undefined' && temperature < val.max) {
              matches.push(val);
            }
        }

    }
    var index = Math.floor( Math.random()*matches.length );
    var obj = matches[index];

    this.setState({
      message: obj.title.replace(/\|/g," "),
      subline: obj.subline,
      color: obj.color
    });
  }
  fetchWeather(lat = 47, lon = 19) {
    lat = 47;
    lon = 19;
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);

         this.setState({
           temperature: Math.round(json.main.temp),
           condition: json.weather[0].main,
           isLoading: false
          });
          this.parsePhrases(this.state.condition, this.state.temperature );

      });


  }

  render() {
    return (
      <View style={[styles.container,{backgroundColor: this.state.color}]}>
        <WeatherIcon />
        <WeatherCelsius temperature={this.state.temperature} />
        <WeatherBigMessage message={this.state.message}/>
        <WeatherSmallMessage message={this.state.subline}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
});
