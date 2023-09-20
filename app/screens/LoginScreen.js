import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import AppTextInput from "../components/AppTextInput";

import Screen from "../components/Screen";
import { AppFormField, SubmitButton, AppForm } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = (props) => {
  return (
    <>
      <Screen style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />

        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            placeholder="Email"
            icon="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            name="email"
          />
          <AppTextInput
            placeholder="Password"
            icon="lock"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            textContentType="password"
            name="password"
          />

          <SubmitButton title="Login" />
        </AppForm>
      </Screen>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    alignSelf: "center",
    height: 100,
    marginBottom: 20,
    marginTop: 50,
    width: 100,
  },
});
