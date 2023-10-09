import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import styles from "./signUp.styles";
import { setUser } from "../../features/auth/authSlice";
import { setDataUser } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSignUpMutation } from "../../services/authApi";
import { SelectList } from "react-native-dropdown-select-list";

const Signup = ({ navigation }) => {
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);
  const [triggerSignup, result] = useSignUpMutation();

  const dispatch = useDispatch();

  const onSubmit = () => {
    const newUser = {
      name: name,
      lastName: lastName,
      gender: gender,
      email: email,
    };
    triggerSignup({ email, password });
    if (result.isSuccess) {
      dispatch(setUser(result));
      dispatch(setDataUser(newUser));
    }
  };

  const options = [
    { key: "Male", value: "Male" },
    { key: "Female", value: "Female" },
    { key: "Undefined", value: "Undefined" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text
          style={{
            fontSize: 25,
            marginVertical: 20,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Sign-Up to start
        </Text>
        <View>
          <Text>Name</Text>
          <TextInput
            style={styles.inputs}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
          />
        </View>
        <View>
          <Text>Last Name</Text>
          <TextInput
            style={styles.inputs}
            value={lastName}
            onChangeText={setLastName}
            placeholder="Enter your last name"
          />
        </View>
        <View>
          <SelectList
            data={options}
            setSelected={setGender}
            placeholder="Select your gender"
            // dropdownShown={false}
          />
        </View>
        <View>
          <Text>Email</Text>
          <TextInput
            style={styles.inputs}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
          />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            style={styles.inputs}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
          />
        </View>
        <View>
          <Text>Confirm Password</Text>
          <TextInput
            style={styles.inputs}
            value={confirmPass}
            onChangeText={setConfirmPass}
            placeholder="Re-enter password"
          />
        </View>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Pressable
            style={
              (styles.loginButton,
              { borderWidth: 1, borderRadius: 5, padding: 10 })
            }
            onPress={onSubmit}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Sign up</Text>
          </Pressable>
        </View>
        <View style={{ marginTop: 20 }}>
          <Pressable
            style={
              (styles.loginButton,
              {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              })
            }
            onPress={() => navigation.navigate("Login")}
          >
            <Text>Already have an account?</Text>
            <Text style={{ color: "white" }}>Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Signup;
