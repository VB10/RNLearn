import React, { Component } from "react";
import { View, Text } from "react-native";
import { Footer, Button, Content } from "native-base";
class TabsCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount = () => {
    console.log(this.props, "TABS cUSTOM");
  };

  render() {
    return (
      <Footer>
        <Button block  style={{flex : 1}} onPress={() => {
          this.props.navigation.navigate("home")
        }}>
          <Text>1</Text>
        </Button>
        <Button success style={{ flex: 1 }} onPress={() => {
          this.props.navigation.navigate("homeDetail")
        }}>
          <Text>2</Text>
        </Button>
  
      </Footer>
    );
  }
}

export default TabsCustom;
