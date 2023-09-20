import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";

import React, { useState } from "react";
import Icon from "../components/IconComponent";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";
const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
      size: 45,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
      size: 45,
    },
  },
];
const AccountDetailsScreen = (props) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Mosh Hamedani"
          subTitle="email@email.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          scrollEnabled={false}
          ItemSeparatorComponent={ListItemSeparator}
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  //   name={item.icon.name}
                  //   backgroundColor={item.icon.backgroundColor}
                  {...item.icon}
                />
              }
            />
          )}
        />
      </View>

      <ListItem
        title="Log Out"
        ImageComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </SafeAreaView>
  );
};

export default AccountDetailsScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
