import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const cartStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    emptyCartContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      text: {
        fontSize: 40,
        color: colors.purple,
        fontWeight: "bold",
      },
    },
    items: {
      flex: 1,
      justifyContent: "space-between",
      totalAmount: {
        alignItems: "flex-end",
        right: 20,
        bottom: 10,
        text: {
          fontSize: 20,
          color: colors.purple,
          fontWeight: "bold",
        },
        price: {
          fontSize: 20,
          textAlign: "right",
          fontWeight: "bold",
          color: colors.quaternary,
        },
      },
    },
  },
});

export default cartStyles;
