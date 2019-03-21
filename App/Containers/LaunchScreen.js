import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  constructor(props){
    super(props);  
    this.state = {ip:"Resolving..."};
  }

  componentDidMount(){
    fetch("http://api.ipify.org/?format=json")
    .then(response => response.json())
    .then(data => this.setState(data));
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
          <View style={styles.section} >
            <Text style={styles.headerText}>
              Your IP is
            </Text>

            <Text style={styles.sectionText}>
              {this.state.ip}
            </Text>
          </View>

      </View>
    )
  }
}
