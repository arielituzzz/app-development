import { View, FlatList } from "react-native";
import React from "react";
import categoriesStyles from "./categoriesList.style";
import categories from "../../../../data/dataCategories";
import CategoryItem from "../../../../components/categoryItem/CategoryItem";
import { Header } from "../../../../components";
const Categories = () => {
  return (
    <View style={categoriesStyles.container}>
      <Header title={"Categories"} />
      <FlatList
        data={categories}
        keyExtractor={(category) => category}
        renderItem={({ item }) => <CategoryItem category={item} />}
      />
    </View>
  );
};

export default Categories;
