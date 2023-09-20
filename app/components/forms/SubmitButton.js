import { useFormikContext } from "formik";
import { StyleSheet, Text, View } from "react-native";
import Button from "../Button";

const SubmitButton = (props) => {
  const { handleSubmit } = useFormikContext();

  const { title } = props;
  return <Button title={title} onPress={handleSubmit} />;
};

export default SubmitButton;
