import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#332F2E",
    alignItems: "center",
    justifyContent: "center",
  },
  containerView1: {
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
  containerView2: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#30A3A6",
    margin: 20,
    padding: 10,
    width: "80%",
    height: "50%",
    text: {
      color: "whitesmoke",
      fontSize: 20,
      borderWidth: 2,
      borderColor: "#DB405C",
      margin: 10,
      padding: 5,
      textAlign: "center",
    },
  },
  modal: {
    container: {
      width: "80%",
      title: {
        fontSize: 24,
        color: "whitesmoke",
        fontWeight: "bold",
        textAlign: "center",
      },
      message: {
        backgroundColor: "whitesmoke",
        justifyContent: "center",
        textAlign: "center",
        fontSize: 20,
      },
    },
  },
});

export default styles;
