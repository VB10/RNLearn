import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class CustomText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.view}>
        <Text>{this.props.text}</Text>
        <Text style={styles.deatil}>{this.props.detail}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deatil: {
    color: "gray",
    fontWeight: "100"
  },
  view: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-start"
  }
});
