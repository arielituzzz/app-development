import { FlatList, Pressable, View, Text } from "react-native";
import React from "react";
import cartStyles from "./cart.style";
import CartItem from "./components/cartItem/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <View style={cartStyles.container}>
      {cart.items.length <= 0 ? (
        <View style={cartStyles.container.emptyCartContainer}>
          <Text style={cartStyles.container.emptyCartContainer.text}>
            Empty Cart!
          </Text>
        </View>
      ) : (
        <View style={cartStyles.container.items}>
          <View>
            <FlatList
              data={cart.items}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <CartItem item={item} />}
            />
          </View>
          <View style={cartStyles.container.items.totalAmount}>
            <Pressable>
              <Text style={cartStyles.container.items.totalAmount.text}>
                Total Amount
              </Text>
              <View>
                <Text
                  style={cartStyles.container.items.totalAmount.price}
                >{`$${cart.totalAmount}`}</Text>
              </View>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

export default Cart;
