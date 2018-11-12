import React, { Component } from 'react';
import { View, Text ,Button,TouchableOpacity } from 'react-native';

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
          
      </View>
    );
  }
}

export default Home1;
