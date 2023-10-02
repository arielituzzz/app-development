import { StyleSheet } from "react-native";

const userProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
    noRegistered: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      text: {
        fontSize: 30,
        fontFamily: "RobotoBoldItalic",
        textAlign: "center",
        textShadowColor: "black",
        textShadowRadius: 5,
      },
    },
    registered: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      text: {
        fontSize: 30,
        fontFamily: "RobotoBoldItalic",
        textAlign: "center",
        textShadowColor: "black",
        textShadowRadius: 5,
      },
    },
  },
});

export default userProfileStyles;
