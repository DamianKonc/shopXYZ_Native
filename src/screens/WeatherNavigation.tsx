import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { WeatherAppScreen } from "./weatherAppScreen";
import { WeatherScreen } from "./weatherScreen";

export type RootStackParamList = {
  WeatherAppScreen: undefined;
  Weather: [latitude: number, longitude: number];
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
        <RootStack.Screen name="Weather" component={WeatherScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default WeatherNavigation;
