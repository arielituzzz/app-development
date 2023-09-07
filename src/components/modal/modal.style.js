import { StyleSheet } from "react-native";

const modalStyles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 50,
    container: {
      width: "80%",
      title: {
        fontSize: 24,
        color: "whitesmoke",
        fontWeight: "bold",
        textAlign: "center",
      },
      message: {
        // backgroundColor: "whitesmoke",
        color: "whitesmoke",
        justifyContent: "center",
        textAlign: "center",
        fontSize: 20,
        marginBottom: 5,
      },
      buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
      },
    },
  },
});

export default modalStyles;
