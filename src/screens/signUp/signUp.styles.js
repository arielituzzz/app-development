import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    backgroundColor: colors.blueLight,
    width: "80%",
    padding: 20,
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 5,
  },
  inputs: {
    width: "95%",
    backgroundColor: colors.grey,
    height: 30,
    marginVertical: 5,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  loginButtom: {
    backgroundColor: colors.primary,
    width: "50%",
    height: 50,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
