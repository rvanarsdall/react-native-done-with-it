import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import colors from "../config/colors";

const Screen = (props) => {
  return (
    <SafeAreaView style={[styles.screen, props.style]}>
      {props.children}
    </SafeAreaView>
  );
};

export default Screen;
const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,

    backgroundColor: colors.light,
  },
});
