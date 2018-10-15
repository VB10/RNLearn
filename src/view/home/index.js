import React, { Component } from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";

export class Home extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}> ASDasdasd</Text>
        <TouchableOpacity
          onPress={() => {
            alert("asdas");
          }}
        >
          <Text>sadassd</Text>
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
