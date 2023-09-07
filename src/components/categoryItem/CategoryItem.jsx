import { View, Text, Pressable } from "react-native";
import React from "react";
import { Card } from "../../components";
import categoryItemStyles from "./categoryItemStyles";

const CategoryItem = ({ category }) => {
  return (
    <Pressable onPress={() => console.log(`This is ${category}`)}>
      <Card style={categoryItemStyles.container.card}>
        <Text>{category}</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;
