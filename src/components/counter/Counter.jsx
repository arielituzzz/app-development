import { Pressable, Text, TextInput, View } from "react-native";

import React, { useState } from "react";
import counterStyles from "./counter.style";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../features/counter/counterSlice";

const Counter = () => {
  const [inputToAdd, setInputToAdd] = useState(0);

  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

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
        {/* <Pressable
          style={counterStyles.counterButtons}
          onPress={() => dispatch(decrement())}
        > */}
        <Pressable
          style={counterStyles.counterButtons}
          onPress={() => setInputToAdd(inputToAdd - 1)}
        >
          <Text style={counterStyles.signs}>-</Text>
        </Pressable>
        <Text style={counterStyles.signs}>{inputToAdd}</Text>
        {/* <Pressable
          style={counterStyles.counterButtons}
          onPress={() => dispatch(increment())}
        > */}
        <Pressable
          style={counterStyles.counterButtons}
          onPress={() => setInputToAdd(inputToAdd + 1)}
        >
          <Text style={counterStyles.signs}>+</Text>
        </Pressable>
      </View>
      <View style={counterStyles.inputContainer}>
        {/* <TextInput
          keyboardType="number-pad"
          style={counterStyles.input}
          placeholder="cantidad a sumar"
          value={Number(inputToAdd)}
          onChangeText={(value) => setInputToAdd(Number(value))}
        /> */}
        <Pressable
          onPress={() => dispatch(incrementByAmount(inputToAdd))}
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
