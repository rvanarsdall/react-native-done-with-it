import { Text, View } from "react-native";
import defaultStyles from "../config/styles";
const AppText = (props) => {
  const { style } = props;
  return <Text style={[defaultStyles.text, style]}>{props.children}</Text>;
};

export default AppText;
