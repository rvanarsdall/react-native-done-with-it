import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import React, { useState } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
const data = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

const MessagesScreen = (props) => {
  const [messages, setMessages] = useState(data);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    console.log("Delete", message);
    // Delete the message from messages
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
    // Call the server
  };

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(data);
        }}
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      />
    </SafeAreaView>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
