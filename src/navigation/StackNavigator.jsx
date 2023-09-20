import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Products, Details } from "../screens";
import { View, Pressable } from "react-native";
import { Header } from "../components";
import AntDesing from "@expo/vector-icons/AntDesign";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        headerShown: true,
        header: () => (
          <View style={{ flexDirection: "row", marginTop: 50 }}>
            {route.name !== "Home" ? (
              <Pressable onPress={() => navigation.goBack()}>
                <AntDesing name="back" size={25} color={"black"} />
              </Pressable>
            ) : null}
            <Header title={route.name} />
            {/* <Header title={route.name === "Home" ? "Home" : "Other Title"} /> */}
          </View>
        ),
      })}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default StackNavigator;