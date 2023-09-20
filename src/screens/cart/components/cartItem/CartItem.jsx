import { View, Text, Pressable } from "react-native";
import React from "react";
import cartItemStyles from "./cartItem.style";
import Feather from "@expo/vector-icons/Feather";

const CartItem = () => {
  return (
    <View style={cartItemStyles.container}>
      <View>
        <Text style={cartItemStyles.container.name}>Name</Text>
      </View>
      <View style={cartItemStyles.container.details}>
        <Text>Quantity</Text>
        <Text>Price</Text>
      </View>
      <Pressable>
        <Feather name="trash" size={25} color={"red"} />
      </Pressable>
    </View>
  );
};

export default CartItem;
