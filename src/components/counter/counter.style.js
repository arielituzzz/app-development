import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const counterStyles = StyleSheet.create({
  counterContainer: {
    flexDirection: "row",
    backgroundColor: colors.grey,
    justifyContent: "space-between",
    height: 50,
  },
  counterContainerAdd: {
    flexDirection: "row",
    backgroundColor: colors.green,
    justifyContent: "space-between",
    height: 50,
  },
  counterContainerDelete: {
    flexDirection: "row",
    backgroundColor: colors.red,
    justifyContent: "space-between",
    height: 50,
  },
  counterButtons: {
    backgroundColor: colors.grey,
    width: "33%",
    justifyContent: "center",
    alignItems: "center",
  },
  signs: {
    fontSize: 35,
  },
  // input: {
  //   backgroundColor: "white",
  //   width: "80%",
  //   height: 30,
  // },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
    backgroundColor: colors.white,
    bottomAdd: {
      textAlign: "center",
      fontSize: 25,
      backgroundColor: colors.green,
      color: "white",
      padding: 8,
      borderRadius: 5,
    },
    bottomDisabled: {
      textAlign: "center",
      fontSize: 25,
      backgroundColor: colors.grey,
      color: "grey",
      padding: 8,
      borderRadius: 5,
    },
    bottomDelete: {
      textAlign: "center",
      fontSize: 25,
      backgroundColor: colors.red,
      color: "white",
      padding: 8,
      borderRadius: 5,
    },
  },
});

export default counterStyles;
