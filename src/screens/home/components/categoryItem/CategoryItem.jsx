import { View, Text, Pressable } from "react-native";
import React from "react";
import { Card } from "../../../../components";
import categoryItemStyles from "./categoryItem.style";

const CategoryItem = ({ category, setCategorySelected }) => {
  return (
    <Pressable onPress={() => setCategorySelected(category)}>
      <Card style={categoryItemStyles.container.card}>
        <Text style={categoryItemStyles.container.card.text}>{category}</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;
