import { View, Text } from "react-native";
import React from "react";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const UserAvatar = () => {
  return (
    <View>
      <EvilIcons name="user" size={24} color="white" />
    </View>
  );
};

export default UserAvatar;
