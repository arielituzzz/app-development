import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import loginStyles from "./login.styles";

const Login = () => {
  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.loginContainer}>
        <Text>Login to Start</Text>
        <TextInput style={loginStyles.inputEmail} />
        <TextInput style={loginStyles.inputEmail} />
        <Pressable style={loginStyles.loginButtom}>
          <Text style={{ color: "white" }}>Login</Text>
        </Pressable>
        <Text>No have an account?</Text>
        <Pressable style={loginStyles.loginButtom}>
          <Text style={{ color: "white" }}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
