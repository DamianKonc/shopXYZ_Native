import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { WeatherAppScreen } from "./weatherAppScreen";

export type RootStackParamList = {
  WeatherAppScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const WeatherNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="WeatherAppScreen"
          component={WeatherAppScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default WeatherNavigation;
