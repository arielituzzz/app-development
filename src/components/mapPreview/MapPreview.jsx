import { Image, View } from "react-native";

import React from "react";
import { googleApi } from "../../firebase";
import styles from "./mapPreview.style";

const MapPreview = ({ location }) => {
  const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=15&size=600x300&maptype=hybrid&key=${googleApi.mapStatic}`;
  return (
    <View style={styles.mapPreview}>
      <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />
    </View>
  );
};

export default MapPreview;
