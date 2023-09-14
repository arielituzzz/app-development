import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const productsStyles = StyleSheet.create({
  container: {
    marginTop: "8%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    listContainer: {
      paddingHorizontal: 15,
      flex: 1,
      marginTop: 15,
      text: {
        fontSize: 20,
        color: colors.quaternary,
      },
    },
  },
});

export default productsStyles;
