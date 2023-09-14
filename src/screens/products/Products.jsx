import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SearchInput } from "../../components";
import { Header } from "../../components";
import allProducts from "../../data/dataProducts";
import productsStyles from "./products.style";

const Products = ({ navigation, route }) => {
  const [arrProducts, setArrProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  const { category } = route.params;

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
      <Header title={category.toUpperCase()} />
      <SearchInput onSearch={setKeyword} />
      <View style={productsStyles.container.listContainer}>
        <FlatList
          data={arrProducts}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", { product: item })}
            >
              <View style={{ flexDirection: "row", marginVertical: 10 }}>
                <Text style={productsStyles.container.listContainer.text}>
                  {item.title}
                </Text>
                <Image
                  style={productsStyles.container.listContainer.image}
                  source={{ uri: item.thumbnail }}
                />
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Products;
