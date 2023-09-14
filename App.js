import StackNavigator from "./src/navigation/StackNavigator";
import { useFonts } from "expo-font";
import fonts from "./src/global/fonts";
export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return <StackNavigator />;
}
