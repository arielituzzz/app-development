import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.blueLight,
    height: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    text: {
      fontSize: 30,
    },
  },
});

export default headerStyles;
