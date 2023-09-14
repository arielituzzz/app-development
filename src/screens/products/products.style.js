import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const productsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
    marginTop: 20,
    listContainer: {
      paddingHorizontal: 15,
      flex: 1,
      marginTop: 15,
      text: {
        fontSize: 20,
        color: colors.quaternary,
        marginRight: 10,
      },
      image: {
        height: "100%",
        width: "20%",
      },
    },
  },
});

export default productsStyles;
