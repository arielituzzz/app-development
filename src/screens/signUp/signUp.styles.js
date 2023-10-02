import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    backgroundColor: colors.red,
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  inputEmail: {
    width: "95%",
    backgroundColor: colors.secondary,
    height: 30,
    marginVertical: 15,
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
