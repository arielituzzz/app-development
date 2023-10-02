import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SearchInput } from "../../components";
import { Header } from "../../components";
import productsStyles from "./products.style";
import { colors } from "../../constants/colors";
import { useGetProductsByCategoryQuery } from "../../services/shopApi.js";
import { useSelector } from "react-redux";

const Products = ({ navigation }) => {
  const category = useSelector((state) => state.shop.categorySelected);
  const [arrProducts, setArrProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const { data, isLoading } = useGetProductsByCategoryQuery(category);

  // useEffect(() => {
  //   console.log(data);
  //   // if (data) {
  //   //   const productsFiltered = data.filter((product) =>
  //   //     product.title.toLowerCase().includes(keyword.toLowerCase())
  //   //   );
  //   //   setArrProducts(productsFiltered);
  //   // }
  // }, []);

  return (
    <SafeAreaView style={productsStyles.container}>
      <Header title={category?.toUpperCase()} />
      <SearchInput onSearch={setKeyword} />
      <View style={productsStyles.container.listContainer}>
        {!isLoading && (
          <FlatList
            data={Object.values(data)}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Details", { product: item })
                }
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginVertical: 10,
                    borderWidth: 1,
                    borderColor: colors.purpleLight,
                    borderRadius: 5,
                    padding: 8,
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={productsStyles.container.listContainer.text}>
                    {item.title}
                  </Text>
                  <Image
                    style={productsStyles.container.listContainer.image}
                    source={{ uri: item.thumbnail }}
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Products;
