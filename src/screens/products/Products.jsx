import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Header, SearchInput } from "../../components";

import allProducts from "../../data/dataProducts";
import productsStyles from "./products.style";

const Products = ({ category }) => {
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
      <Header title={category} />
      <SearchInput onSearch={setKeyword} />
      <View style={productsStyles.container.listContainer}>
        <FlatList
          data={arrProducts}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Products;
