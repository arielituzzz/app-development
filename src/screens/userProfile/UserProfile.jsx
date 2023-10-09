import React, { useState, useEffect } from "react";
import { Image, Pressable, View, Text } from "react-native";

import * as ImagePicker from "expo-image-picker";

import { useSelector, useDispatch } from "react-redux";
import { clearUser, setCameraImage } from "../../features/auth/authSlice";
import { usePostImageUserMutation } from "../../services/shopApi";
import * as Location from "expo-location";
import { setLocation } from "../../features/general/generalSlice";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { MapPreview, OptionsRegister } from "../../components";

import userProfileStyles from "./userProfile.style";
import styles from "./profile.styles";

const UserProfile = () => {
  const [showBottom, setShowBottom] = useState(false);
  const { user, localId, name, lastName, gender, email, update } = useSelector(
    (state) => state.auth
  );
  const { location } = useSelector((state) => state.general);
  const image = useSelector((state) => state.auth.imageCamera);
  const dispatch = useDispatch();
  const [triggerSaveImageUser, result] = usePostImageUserMutation();

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
    const update = new Date().toLocaleDateString("en-US");
    triggerSaveImageUser({
      name,
      lastName,
      gender,
      email,
      image,
      localId,
      update,
    });
    console.log(localId, update);
    setShowBottom(false);
  };

  const logOut = () => {
    dispatch(clearUser());
  };

  const locationRequest = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("permission denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    const userLocation = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    dispatch(setLocation(userLocation));
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
        <View style={{ overflow: "hidden", borderRadius: 100 }}>
          <Image
            source={{
              uri:
                gender === "Male"
                  ? "https://img.freepik.com/premium-vector/default-male-user-profile-icon-vector-illustration_276184-168.jpg"
                  : gender === "Female"
                  ? "https://img.freepik.com/premium-vector/default-female-user-profile-icon-vector-illustration_276184-169.jpg"
                  : "https://e7.pngegg.com/pngimages/753/432/png-clipart-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service.png",
            }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
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
      {!location.latitude || !location.longitude ? (
        <View style={{ marginTop: 20 }}>
          <Pressable onPress={locationRequest}>
            <Text style={{ fontSize: 15, color: "blue", fontWeight: "bold" }}>
              Click here to get your LOCATION
            </Text>
          </Pressable>
        </View>
      ) : (
        <View style={{ marginTop: 20 }}>
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            Your location
          </Text>
          <MapPreview location={location} />
        </View>
      )}
      <View style={{ marginTop: 20 }}>
        <Text>Last Update: {update}</Text>
      </View>
    </View>
  );
};

export default UserProfile;
