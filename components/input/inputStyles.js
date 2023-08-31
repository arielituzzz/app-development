import { StyleSheet } from "react-native";

const inputStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-around",
    minWidth: "60%",
    textInput: {
      fontSize: 30,
      textAlign: "center",
      marginBottom: 10,
      backgroundColor: "whitesmoke",
      borderRadius: 5,
    },
    buttons: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
  },
});

export default inputStyles;
