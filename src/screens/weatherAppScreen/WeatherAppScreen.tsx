import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../../styles/generalStyles/constans";
import moment from "moment";
import WeatherCurrent from "../../components/weatherCurrent/WeatherCurrent";
import WeatherCoordinates from "../../components/weatherCoordinates/WeatherCoordinates";

const WeatherAppScreen = () => {
  const now = moment(new Date());

  return (
    <LinearGradient
      colors={[Colors.LIGHT_GRAY, Colors.DARKER_GRAY]}
      style={styles.container}
      testID="WeatherAppScreen"
    >
      <View style={styles.title}>
        <Text style={styles.date}>{now.format(`MMM DD, YYYY`)}</Text>
        <Text style={styles.day}>{now.format("dddd")}</Text>
      </View>
      <WeatherCurrent />
      <Text testID="weatherAppScreen-divider" style={styles.divider}>
        Or
      </Text>
      <WeatherCoordinates />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    alignContent: "space-between",
    justyfiContent: "space-evenly",
  },
  title: {
    justifyContent: "flex-end",
  },
  date: {
    color: Colors.GRAY,
    fontSize: 13,
  },
  day: {
    color: Colors.WHITE,
    fontSize: 21,
  },
  divider: {
    color: Colors.WHITE,
    textAlign: "center",
  },
});

export default WeatherAppScreen;
