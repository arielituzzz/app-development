import { View, Text, Pressable } from "react-native";
import React from "react";
import headerStyles from "./header.style";
import AntDesing from "@expo/vector-icons/AntDesign";

const Header = ({ title }) => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.container.text}>{title.toUpperCase()}</Text>
      <Pressable>
        <AntDesing name="home" size={35} color={"black"} />
      </Pressable>
    </View>
  );
};

export default Header;
