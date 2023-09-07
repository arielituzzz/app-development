import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const inputStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    paddingTop: 10,
    textInput: {
      fontSize: 30,
      textAlign: "center",
      marginBottom: 10,
      backgroundColor: "whitesmoke",
      borderRadius: 5,
    },
    input: {
      color: "white",
      backgroundColor: colors.primary,
      borderRadius: 8,
      padding: 10,
      borderWidth: 1,
      borderColor: colors.primary,
      width: "80%",
      fontSize: 20,
    },
  },
});

export default inputStyles;
