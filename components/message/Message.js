import React from "react";
import { View, Text, Modal } from "react-native";
import messageStyles from "./messageStyles";

const Message = ({ message }) => {
  return (
    <View style={messageStyles.message}>
      <Text style={messageStyles.message.text}>{message}</Text>
    </View>
  );
};

export default Message;
