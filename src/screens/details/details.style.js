import { StyleSheet } from "react-native";

export default detailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingHorizontal: 25,
    marginTop: 20,

    image: {
      height: "50%",
      width: "90%",
    },
    stock: {
      flex: 1,
      fontSize: 15,
      fontWeight: "bold",
    },
    title: {
      fontSize: 30,
      marginVertical: 15,
      fontFamily: "Roboto",
    },
    description: {
      fontSize: 15,
      fontFamily: "RobotoThinItalic",
    },
    price: {
      flex: 1,
      fontSize: 30,
      fontWeight: "bold",
      marginVertical: 15,
    },
  },
});
