import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.blueLight,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,

    text: {
      fontSize: 30,
      fontFamily: "RobotoBoldItalic",
      textAlign: "center",
      textShadowColor: "white",
      textShadowRadius: 10,
    },
  },
});

export default headerStyles;
