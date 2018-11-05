import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  Button,
  Avatar,
  PricingCard,
  Rating,
  Tile
} from "react-native-elements";
class CustomElements extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  ratingCompleted(rating) {
    console.log("Rating is: " + rating);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Rating
          showRating
          onFinishRating={this.ratingCompleted}
          onStartRating={this.ratingStarted}
          style={{ paddingVertical: 10 }}
        />
        <Tile
          imageSrc="https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
          title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
          featured
          caption="Some Caption Text"
        />
      </View>
    );
  }
}

export default CustomElements;
