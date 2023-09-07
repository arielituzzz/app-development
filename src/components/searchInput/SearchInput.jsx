import React, { useState } from "react";
import { View, TextInput, Pressable } from "react-native";
import inputStyles from "./searchInput.style";
import AntDesing from "@expo/vector-icons/AntDesign";

const SearchInput = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const search = () => {
    onSearch(value);
  };

  const clearInput = () => {
    setValue("");
    onSearch("");
  };

  return (
    <View style={inputStyles.container}>
      <TextInput
        style={inputStyles.container.input}
        value={value}
        onChangeText={setValue}
        placeholder="Search Products"
      />
      <Pressable onPress={search}>
        <AntDesing name="search1" size={25} color={"black"} />
      </Pressable>
      <Pressable onPress={clearInput}>
        <AntDesing name="closecircleo" size={25} color={"black"} />
      </Pressable>
    </View>
  );
};

export default SearchInput;
