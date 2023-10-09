import { View, Text, Pressable } from "react-native";
import optionsRegisterStyles from "./optionsRegister.style";

const OptionsRegister = ({ navigation }) => {
  return (
    <View style={optionsRegisterStyles.container}>
      <Text>
        Do you have an account?{" "}
        <Text style={optionsRegisterStyles.container.login}>Please LOGIN</Text>
      </Text>
      <Text>
        If not, please
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={optionsRegisterStyles.container.signUp}>SIGN UP</Text>
        </Pressable>
      </Text>
    </View>
  );
};

export default OptionsRegister;
