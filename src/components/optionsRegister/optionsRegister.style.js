import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const optionsRegisterStyles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    login: {
      color: colors.green,
      fontFamily: "RobotoBoldItalic",
    },
    signUp: {
      color: colors.blueLight,
      fontFamily: "RobotoBoldItalic",
    },
  },
});

export default optionsRegisterStyles;
