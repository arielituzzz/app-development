import { Image, Text, View } from "react-native";
import detailsStyles from "./details.style";
import { Header } from "../../components";
const Details = ({ route }) => {
  const { product } = route.params;
  return (
    <View style={detailsStyles.container}>
      <Header title={`${product.category.toUpperCase()}`} />
      <Image
        style={detailsStyles.container.image}
        source={{ uri: product.images[0] }}
      />
      <Text
        style={detailsStyles.container.stock}
      >{`Stock: ${product.stock}`}</Text>
      <Text style={detailsStyles.container.title}>{product.title}</Text>
      <Text style={detailsStyles.container.description}>
        {product.description}
      </Text>
      <Text style={detailsStyles.container.price}>{`$ ${product.price}`}</Text>
    </View>
  );
};

export default Details;
