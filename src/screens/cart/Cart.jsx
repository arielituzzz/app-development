import { FlatList, Pressable, View, Text } from "react-native";
import React from "react";
import cartStyles from "./cart.style";
import dataCart from "../../data/dataCart";
import CartItem from "./components/cartItem/CartItem";

const Cart = () => {
  const renderItem = () => <CartItem />;

  return (
    <View style={cartStyles.container}>
      <View>
        <FlatList
          data={dataCart}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <View>
        <Pressable>
          <Text>Confirm</Text>
          <View>
            <Text>{`Total $100`}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;
