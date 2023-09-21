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
        fontSize: 15,
        color: colors.quaternary,
      },
      image: {
        // height: "100%",
        width: "15%",
        borderRadius: 5,
      },
    },
  },
});

export default productsStyles;
