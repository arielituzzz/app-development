import React from "react";
import { View, TextInput, Button } from "react-native";
import inputStyles from "./inputStyles";

const Input = ({
  textValue,
  onHandleChangeItem,
  onHandleAddItem,
  onHandleDeleteAll,
}) => {
  return (
    <View style={inputStyles.container}>
      <TextInput
        id="textInput"
        placeholder="Add Item"
        placeholderTextColor={"grey"}
        style={inputStyles.container.textInput}
        value={textValue}
        onChangeText={onHandleChangeItem}
      ></TextInput>
      <View style={inputStyles.container.buttons}>
        <Button
          title="ADD"
          color={"#6CDE40"}
          onPress={onHandleAddItem}
        ></Button>
        <Button
          title="CLEAR ALL"
          color={"#DB405C"}
          onPress={onHandleDeleteAll}
        ></Button>
      </View>
    </View>
  );
};

export default Input;
