import React, { Component } from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "../component/text";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: "Main Text"
    };
  }

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}> ASDasdasd</Text>
        <TouchableOpacity
          onPress={() => {
            alert(this.state.val);
            this.setState({
              val: "Change it!"
            });
          }}
        >
          <CustomText detail="Detail of text" text="asdasd" />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "red"
  }
});
