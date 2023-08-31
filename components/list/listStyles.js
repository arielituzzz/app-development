import { StyleSheet } from "react-native";

const listStyles = StyleSheet.create({
  list: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#30A3A6",
    margin: 20,
    padding: 10,
    width: "80%",
    height: "40%",
    container: {
      borderColor: "#DB405C",
      borderWidth: 2,
      borderRadius: 5,
      margin: 10,
      padding: 5,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      text: {
        color: "whitesmoke",
        fontSize: 20,
        textAlign: "center",
        padding: 5,
      },
      textSelected: {
        color: "whitesmoke",
        fontSize: 20,
        textAlign: "center",
        backgroundColor: "#DB405C",
        padding: 5,
        borderRadius: 5,
      },
      delete: {
        fontSize: 15,
        color: "red",
        fontWeight: 600,
      },
    },
  },
});

export default listStyles;
