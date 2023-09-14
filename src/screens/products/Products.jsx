import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Header, SearchInput } from "../../components";

import allProducts from "../../data/dataProducts";
import productsStyles from "./products.style";

const Products = ({ category, setProductSelected }) => {
  const [arrProducts, setArrProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (category) {
      const products = allProducts.filter(
        (product) => product.category === category
      );

      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setArrProducts(filteredProducts);
    } else {
      const filteredProducts = allProducts.filter((product) =>
        product.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setArrProducts(filteredProducts);
    }
  }, [category, keyword]);

  return (
    <View style={productsStyles.container}>
      <SearchInput onSearch={setKeyword} />
      <View style={productsStyles.container.listContainer}>
        <FlatList
          data={arrProducts}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setProductSelected(item)}>
              <Text style={productsStyles.container.listContainer.text}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Header title={category} />
    </View>
  );
};

export default Products;
