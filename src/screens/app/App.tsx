/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import { ScreenView } from "../ScreenView";

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View>
          <Text>Działa</Text>
          <ScreenView />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
