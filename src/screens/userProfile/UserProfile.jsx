import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import userProfileStyles from "./userProfile.style";
import Entypo from "react-native-vector-icons/Entypo";

const UserProfile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <View style={userProfileStyles.container}>
      {user ? (
        <View style={userProfileStyles.container.registered}>
          <Text style={userProfileStyles.container.registered.text}>
            USER REGISTERED
          </Text>
        </View>
      ) : (
        <View style={userProfileStyles.container.noRegistered}>
          <Entypo name="emoji-sad" size={50} color="black" />
          <Text style={userProfileStyles.container.noRegistered.text}>
            NO REGISTERED
          </Text>
        </View>
      )}
    </View>
  );
};

export default UserProfile;
