import { Pressable, Text, View } from "react-native";

import React, { useState } from "react";
import counterStyles from "./counter.style";
import { useDispatch } from "react-redux";

import { addToCart } from "../../features/cart/cartSlice";

const Counter = ({ product }) => {
  const [inputToAdd, setInputToAdd] = useState(0);

  const dispatch = useDispatch();

  const { id, title } = product;

  const price = product.price * inputToAdd;

  const handleAddToCart = () => {
    const quantity = inputToAdd;
    const item = { id, title, quantity, price };
    dispatch(addToCart(item));
  };

  return (
    <View style={counterStyles.container}>
      <View
        style={
          inputToAdd < 0
            ? counterStyles.counterContainerDelete
            : inputToAdd > 0
            ? counterStyles.counterContainerAdd
            : counterStyles.counterContainer
        }
      >
        <Pressable
          style={counterStyles.counterButtons}
          onPress={() =>
            inputToAdd > 0 ? setInputToAdd(inputToAdd - 1) : null
          }
        >
          <Text style={counterStyles.signs}>-</Text>
        </Pressable>
        <Text style={counterStyles.signs}>{inputToAdd}</Text>

        <Pressable
          style={counterStyles.counterButtons}
          onPress={() => setInputToAdd(inputToAdd + 1)}
        >
          <Text style={counterStyles.signs}>+</Text>
        </Pressable>
      </View>
      <View style={counterStyles.inputContainer}>
        <Pressable
          onPress={() => handleAddToCart()}
          disabled={inputToAdd === 0 ? true : false}
        >
          <Text
            style={
              inputToAdd < 0
                ? counterStyles.inputContainer.bottomDelete
                : inputToAdd > 0
                ? counterStyles.inputContainer.bottomAdd
                : counterStyles.inputContainer.bottomDisabled
            }
          >
            {inputToAdd > 0
              ? "Add to Cart"
              : inputToAdd < 0
              ? "Remove from Cart"
              : "Select quantity"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;
