import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/store";
import BottomTabNavigator from "./src/navigation/bottomTabNavigator/BottomTabNavigator";
import { useFonts } from "expo-font";
import fonts from "./src/global/fonts";
export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  );
}
