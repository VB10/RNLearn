import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux'   

class Home1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
      
   
      
  }

  componentWillMount = () => {
    console.log(this.props,"Gelen")
  }
  

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text> Home1 </Text>

        <TouchableOpacity onPress={() => {
          Actions.homeDetail()
        }}>
          <Text>go next page</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

export default Home1;
