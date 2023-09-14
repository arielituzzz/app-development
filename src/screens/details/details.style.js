import { StyleSheet } from "react-native";

export default detailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: "8%",
    alignItems: "center",
    image: {
      height: "50%",
      width: "90%",
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
