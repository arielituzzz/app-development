import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const bottomTabNavigatorStyles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.tertiary,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    iconContainer: {
      backgroundColor: colors.secondary,
      borderRadius: 20,
      padding: 8,
      justifyContent: "center",
      alignItems: "center",
    },
  },
});

export default bottomTabNavigatorStyles;
