import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImagePage from "./app/screens/ViewImageScreen";
import Button from "./app/components/Button";
import Card from "./app/components/Card";
import AppText from "./app/components/AppText";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AccountDetailsScreen from "./app/screens/AccountsDetailsScreen";
import ListingScreen from "./app/screens/ListingScreen";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Screen>
        <AppTextInput placeholder="Username" icon="email" />
        <>
          {/* <WelcomeScreen /> */}
          {/* <ViewImagePage /> */}
          {/* <MessagesScreen /> */}
          {/* <AccountDetailsScreen /> */}
          {/* <ListingScreen /> */}

          {/* <ListingDetailsScreen title={"Red jacket for sale"} price={"$100"} /> */}
          <StatusBar style="auto" />
        </>
      </Screen>
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
