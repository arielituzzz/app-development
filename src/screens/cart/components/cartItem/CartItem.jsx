import { View, Text, Pressable } from "react-native";
import React from "react";
import cartItemStyles from "./cartItem.style";
import Feather from "@expo/vector-icons/Feather";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../../features/cart/cartSlice.js";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <View style={cartItemStyles.container}>
      <View>
        <View>
          <Text>{`ID: ${item.id}`}</Text>
          <Text style={cartItemStyles.container.product.name}>
            {item.title}
          </Text>
        </View>
        <View style={cartItemStyles.container.product.details}>
          <Text>{`quantity: ${item.quantity}`}</Text>
          <Text>{`$${item.price}`}</Text>
        </View>
      </View>
      <View>
        <Pressable onPress={() => dispatch(removeFromCart(item.id))}>
          <Feather name="trash" size={25} color={"red"} />
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;
