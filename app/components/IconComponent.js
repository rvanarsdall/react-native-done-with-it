import { StyleSheet, Text, View } from "react-native";
// materiial icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
const Icon = (props) => {
  const {
    name,
    size = 40,
    backgroundColor = "#000",
    iconColor = colors.white,
  } = props;
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,

        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
  },
});
