import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import React, { useState } from "react";
import Button from "./Button";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

const AppPicker = (props) => {
  const {
    icon,
    placeholder,
    items,
    numberOfColumns = 1,
    PickerItemComponent = PickerItem,
    selectedItem,
    onSelectItem,
    width = "100%",
    ...otherProps
  } = props;
  const [showModal, setShowModal] = useState(false);
  console.log([styles.container, width]);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name={"chevron-down"}
            size={20}
            color={colors.medium}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={showModal} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setShowModal(false)} />
          <FlatList
            numColumns={numberOfColumns}
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  console.log(item);
                  onSelectItem(item);
                  setShowModal(false);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    // backgroundColor: colors.medium,
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
  icon: {
    marginRight: 10,
    alignSelf: "center",
    width: 30,
  },
  text: {
    flex: 1,
  },
});
