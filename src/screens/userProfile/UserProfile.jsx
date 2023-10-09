import React, { useState, useEffect } from "react";
import { Image, Pressable, View, Text } from "react-native";

import * as ImagePicker from "expo-image-picker";

import { useSelector, useDispatch } from "react-redux";
import { clearUser, setCameraImage } from "../../features/auth/authSlice";
import { usePostDataUserMutation } from "../../services/shopApi";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { MapPreview, OptionsRegister } from "../../components";

import userProfileStyles from "./userProfile.style";
import styles from "./profile.styles";

const UserProfile = () => {
  const [showBottom, setShowBottom] = useState(false);
  const { user, localId, name, lastName, gender, email } = useSelector(
    (state) => state.auth
  );
  const { location } = useSelector((state) => state.general);
  const image = useSelector((state) => state.auth.imageCamera);
  const dispatch = useDispatch();
  const [triggerSaveDataUser, result] = usePostDataUserMutation();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();

    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 0.4,
      });
      if (!result.canceled) {
        dispatch(
          setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
        );
        setShowBottom(true);
      }
    }
  };

  const confirmImage = () => {
    triggerSaveDataUser({ name, lastName, gender, email, image, localId });
    console.log(name, lastName, gender, email, localId);
    setShowBottom(false);
  };

  const logOut = () => {
    dispatch(clearUser());
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "flex-end",
          width: "90%",
        }}
      >
        <Pressable onPress={logOut}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Log-Out</Text>
            <MaterialCommunityIcons name="exit-run" size={30} color="black" />
          </View>
        </Pressable>
      </View>

      <Text style={{ fontSize: 30, fontWeight: "bold" }}>
        HI, {name ? name : "USER"}!
      </Text>
      {email && (
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{email}</Text>
      )}
      {image ? (
        <View style={{ overflow: "hidden", borderRadius: 100 }}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      ) : (
        <Image
          source={{
            uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <Pressable style={styles.cameraButton} onPress={pickImage}>
        <MaterialCommunityIcons name="camera" size={40} color="black" />
        <Text style={{ color: "white" }}>Change Picture</Text>
      </Pressable>
      {showBottom && (
        <Pressable style={styles.cameraButton} onPress={confirmImage}>
          <Text>Complete Registration!</Text>
        </Pressable>
      )}
      {/* <Pressable
        style={{ ...styles.cameraButton, marginTop: 20 }}
        onPress={() => navigation.navigate("Location")}
      >
      <Text>Ir a mi ubiacion</Text>
      </Pressable> */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>Your location</Text>
        <MapPreview location={location} />
      </View>
    </View>
    // <View style={userProfileStyles.container}>
    //   {user ? (
    //     <View style={userProfileStyles.container.registered}>
    //       <Text style={userProfileStyles.container.registered.text}>
    //         USER REGISTERED
    //       </Text>
    //     </View>
    //   ) : (
    //     <View style={userProfileStyles.container.noRegistered}>
    //       <Entypo name="emoji-sad" size={50} color="black" />
    //       <Text style={userProfileStyles.container.noRegistered.text}>
    //         NO REGISTERED
    //       </Text>
    //       <OptionsRegister />
    //     </View>
    //   )}
    // </View>
  );
};

export default UserProfile;
