import { View, Text } from "react-native";
import React from "react";
import cardStyles from "./card.style";

const Card = ({ children, style }) => {
  return <View style={[cardStyles.container, style]}>{children}</View>;
};

export default Card;
