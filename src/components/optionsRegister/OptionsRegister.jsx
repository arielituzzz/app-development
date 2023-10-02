import { View, Text } from "react-native";
import optionsRegisterStyles from "./optionsRegister.style";

const OptionsRegister = () => {
  return (
    <View style={optionsRegisterStyles.container}>
      <Text>
        Do you have an account?{" "}
        <Text style={optionsRegisterStyles.container.login}>Please LOGIN</Text>
      </Text>
      <Text>
        If not, please{" "}
        <Text style={optionsRegisterStyles.container.signUp}>SIGN UP</Text>
      </Text>
    </View>
  );
};

export default OptionsRegister;
