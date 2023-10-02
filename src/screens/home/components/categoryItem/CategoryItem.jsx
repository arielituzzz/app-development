import { View, Text, Pressable } from "react-native";
import React from "react";
import { Card } from "../../../../components";
import categoryItemStyles from "./categoryItem.style";
import { setCategorySelected } from "../../../../features/shop/shopSlice";
import { useDispatch } from "react-redux";

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch();
  return (
    // <Pressable onPress={() => navigation.navigate("Products", { category })}>
    //   <Card style={categoryItemStyles.container.card}>
    //     <Text style={categoryItemStyles.container.card.text}>{category}</Text>
    //   </Card>
    // </Pressable>
    <Pressable
      onPress={() => {
        dispatch(setCategorySelected(category));
        navigation.navigate("Products", { category });
      }}
    >
      <Card style={categoryItemStyles.container.card}>
        <Text style={categoryItemStyles.container.card.text}>{category}</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;
