import { StyleSheet } from "react-native";

export default detailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingHorizontal: 25,
    marginTop: 20,

    image: {
      height: "40%",
      width: "90%",
      marginTop: 10,
    },
    stock: {
      fontSize: 15,
      fontWeight: "bold",
      marginBottom: 10,
    },
    category: {
      fontSize: 15,
      // fontWeight: "bold",
      marginBottom: 10,
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
      fontSize: 40,
      fontWeight: "bold",
      marginVertical: 15,
    },
  },
});
