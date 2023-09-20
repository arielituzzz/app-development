import { Cart } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
