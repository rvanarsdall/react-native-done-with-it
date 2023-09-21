import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
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
const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Cameras",
    value: 3,
  },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ListingEditScreen />
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
