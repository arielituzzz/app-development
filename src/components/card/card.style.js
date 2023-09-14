import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.yellow,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 5,
    },
    elevation: 10,
    shadowOpacity: 1,
    shadowRadius: 1,
  },
});

export default cardStyles;
