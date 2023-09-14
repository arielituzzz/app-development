import { Image, Text, View } from "react-native";

import { Header } from "../../components";
import React from "react";
import detailsStyles from "./details.style";

const Details = ({ product }) => {
  //const { product } = route.params;
  return (
    <View style={detailsStyles.container}>
      <Image
        style={detailsStyles.container.image}
        source={{ uri: product.images[0] }}
      />
      <Text style={detailsStyles.container.title}>{product.title}</Text>
      <Text style={detailsStyles.container.description}>
        {product.description}
      </Text>
      <Text style={detailsStyles.container.price}>{`$ ${product.price}`}</Text>
      <Header title={"Detalle"} />
    </View>
  );
};

export default Details;
