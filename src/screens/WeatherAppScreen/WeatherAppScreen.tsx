import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../../styles/generalStyles/constans";

const WeatherAppScreen = () => {
  return (
    <LinearGradient
      colors={[Colors.LIGHT_GRAY, Colors.DARKER_GRAY]}
      style={styles.container}
      testID="WeatherAppScreen"
    ></LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkblue",
    paddingHorizontal: 40,
    alignContent: "space-between",
    justyfiContent: "space-evenly",
  },
});

export default WeatherAppScreen;
