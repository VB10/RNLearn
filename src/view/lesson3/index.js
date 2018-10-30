import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView
} from "react-native";

const { width, height } = Dimensions.get("window");
export class Lesson3 extends Component {
  render() {
    return (
      <View style={styles.view}>
        <ScrollView
          onScroll={event => {
            alert(event.nativeEvent.contentSize.height);
          }}
        >
          <Text> {height} </Text>

          <Image
            source={{
              uri: "https://picsum.photos/200/300"
            }}
            resizeMode="cover"
            style={{ height: 200, width: 200 }}
          />
          <Image
            source={{
              uri: "https://picsum.photos/200/300"
            }}
            resizeMode="cover"
            style={{ height: 200, width: 200 }}
          />
          <Image
            source={{
              uri: "https://picsum.photos/200/300"
            }}
            resizeMode="cover"
            style={{ height: 200, width: 200 }}
          />
          <Image
            source={{
              uri: "https://picsum.photos/200/300"
            }}
            resizeMode="cover"
            style={{ height: 200, width: 200 }}
          />
        </ScrollView>

        {/* <View style={styles.test}>
          <Text>asdsad</Text>
        </View> */}
      </View>
    );
  }
}

export default Lesson3;
const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  test: {
    backgroundColor: "red",
    height: "50%",
    position: "absolute",
    right: 0,
    left: 0
  }
});
