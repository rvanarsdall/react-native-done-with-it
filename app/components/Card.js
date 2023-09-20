import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import AppText from "./AppText";

const Card = (props) => {
  const { title, subTitle, image } = props;
  console.log(title, subTitle, image);
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
      {/* <View style={styles.cardContainer}>{props.children}</View> */}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  cardContainer: {
    padding: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

/* 
 padding: 20,
    backgroundColor: "#f8f4f4",
    marginBottom: 20,
    overflow: "hidden",

*/
