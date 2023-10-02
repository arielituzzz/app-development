import AuthStackNavigator from "./AuthStackNavigator";
import BottomTabNavigator from "./bottomTabNavigator/BottomTabNavigator";
import { useSelector } from "react-redux";

const MainNavigator = () => {
  // const user = useSelector((state) => state.user.user);

  // return user ? <BottomTabNavigator /> : <AuthStackNavigator />;
  return <BottomTabNavigator />;
};
export default MainNavigator;
