import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import AccountDetailsScreen from "./app/screens/AccountsDetailsScreen";
import AppPicker from "./app/components/AppPicker";
import AppText from "./app/components/AppText";
import AppTextInput from "./app/components/AppTextInput";
import Button from "./app/components/Button";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingScreen from "./app/screens/ListingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import React, { useState } from "react";
import Screen from "./app/components/Screen";
import ViewImagePage from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import * as Permissions from "expo-permissions";
import { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Camera from "expo-camera";
import * as Location from "expo-location";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState();
  async function requestPermission() {
    // const cameraResult = await Camera.requestCameraPermissionsAsync();
    // console.log("cameraResult", cameraResult);
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!result.granted) {
      alert("You need to enable permission to access the library");
    }
  }

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.canceled) {
        console.log("result", result);
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <ListingEditScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <LoginScreen /> */}
      {/* <AppTextInput placeholder="Username" icon="email" /> */}
      <>
        {/* <WelcomeScreen /> */}
        {/* <ViewImagePage /> */}
        {/* <MessagesScreen /> */}
        {/* <AccountDetailsScreen /> */}
        {/* <ListingScreen /> */}

        {/* <ListingDetailsScreen title={"Red jacket for sale"} price={"$100"} /> */}
        <Screen>
          <ImageInput
            imageUri={imageUri}
            onChangeImage={(uri) => setImageUri(uri)}
          />
        </Screen>
        <StatusBar style="auto" />
      </>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f8f4f4",
    marginBottom: 20,
    overflow: "hidden",
  },
});
