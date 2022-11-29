import { StyleSheet, ViewProps, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import { ActivityIndicator } from "react-native-paper";
import { Colors } from "../../styles/generalStyles/constans";

type Props = {
  label: string;
  onPress: () => void;
  loading?: boolean;
} & ViewProps;

const Button = (props: Props) => {
  const { label, onPress, loading, style, ...others } = props;
  return (
    <TouchableOpacity onPress={onPress} testID="button">
      <LinearGradient
        {...others}
        colors={[Colors.LIGHT_GRAY, Colors.DARK_GRAY]}
        style={[styles.container, style]}
      >
        {loading ? (
          <ActivityIndicator
            testID="button-loading"
            size={24}
            color={Colors.WHITE}
          />
        ) : (
          <Text style={styles.label}>{label}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 19,
    color: Colors.WHITE,
  },
});

export default Button;
