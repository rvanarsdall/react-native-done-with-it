import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Screen = (props) => {
  return (
    <SafeAreaView style={[styles.screen]}>
      <View style={[styles.container, props.style]}>{props.children}</View>
    </SafeAreaView>
  );
};

export default Screen;
const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.light,
    flex: 1,
  },
  container: {
    // flex: 1,
  },
});
