import { View, Text, Pressable } from "react-native";
import React from "react";
import headerStyles from "./header.style";

const Header = ({ title }) => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.container.text}>{title}</Text>
    </View>
  );
};

export default Header;
