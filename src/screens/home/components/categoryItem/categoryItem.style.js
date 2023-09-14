import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/colors";

const categoryItemStyles = StyleSheet.create({
  container: {
    card: {
      marginHorizontal: 30,
      marginVertical: 10,
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
      text: {
        fontSize: 25,
        fontFamily: "Roboto",
      },
    },
  },
});

export default categoryItemStyles;
