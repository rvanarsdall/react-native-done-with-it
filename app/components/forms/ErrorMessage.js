import { StyleSheet, Text, View } from "react-native";
import AppText from "../AppText";

const ErrorMessage = (props) => {
  if (!props.error || !props.visible) return null;

  return <AppText style={styles.error}>{props.error}</AppText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
