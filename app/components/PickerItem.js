import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

const PickerItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.text}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
