import { Image, Text, View } from "react-native";
import detailsStyles from "./details.style";
import { Header } from "../../components";
import { Counter, OptionsRegister } from "../../components";
import { useSelector } from "react-redux";

const Details = ({ route }) => {
  const { user } = useSelector((state) => state.user);
  const { product } = route.params;
  return (
    <View style={detailsStyles.container}>
      <Header title={`${product.title.toUpperCase()}`} />
      <Image
        style={detailsStyles.container.image}
        source={{ uri: product.images[0] }}
      />
      <Text
        style={detailsStyles.container.stock}
      >{`Stock: ${product.stock}`}</Text>
      <Text
        style={detailsStyles.container.category}
      >{`Category: ${product.category.toUpperCase()}`}</Text>
      <Text style={detailsStyles.container.description}>
        {product.description}
      </Text>
      <Text style={detailsStyles.container.price}>{`$ ${product.price}`}</Text>
      {user ? <Counter product={product} /> : <OptionsRegister />}
    </View>
  );
};

export default Details;
