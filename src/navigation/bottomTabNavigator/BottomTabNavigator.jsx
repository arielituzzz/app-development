import CartNavigator from "../CartNavigator";
import OrdersNavigator from "../OrdersNavigator";
import StackNavigator from "../StackNavigator";
import Feather from "@expo/vector-icons/Feather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import bottomTabNavigatorStyles from "./bottomTabNavigator.style";
import { colors } from "../../constants/colors";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const counter = useSelector((state) => state.cart.items.length);
  return (
    <BottomTab.Navigator
      initialRouteName="Shop"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: bottomTabNavigatorStyles.tabBar,
      }}
    >
      <BottomTab.Screen
        name="Shop"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={
                focused ? bottomTabNavigatorStyles.tabBar.iconContainer : null
              }
            >
              <Feather name="shopping-bag" size={24} color={colors.white} />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="CartNav"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={
                focused
                  ? bottomTabNavigatorStyles.tabBar.shopContainerActive
                  : bottomTabNavigatorStyles.tabBar.shopContainer
              }
            >
              <Feather name="shopping-cart" size={24} color={colors.white} />
              {counter > 0 ? (
                <Text style={{ color: colors.white }}>{counter}</Text>
              ) : null}
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdersNav"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={
                focused ? bottomTabNavigatorStyles.tabBar.iconContainer : null
              }
            >
              <Feather name="list" size={24} color={colors.white} />
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
