import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#332F2E",
    alignItems: "center",
    justifyContent: "center",
  },
  containerView1: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    textInput: {
      fontSize: 30,
      textAlign: "center",
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
    text: {
      color: "whitesmoke",
      fontSize: 20,
      borderWidth: 2,
      borderColor: "#DB405C",
      margin: 10,
      padding: 5,
      width: "70%",
      textAlign: "center",
    },
  },
});

export default styles;
