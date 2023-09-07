import React from "react";
import { View, Text } from "react-native";
import titleStyles from "./title.style";

const Title = ({ title }) => {
  return (
    <View style={titleStyles.title}>
      <Text style={titleStyles.title.text}>{title}</Text>
    </View>
  );
};

export default Title;
