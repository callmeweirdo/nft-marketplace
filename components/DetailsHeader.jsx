import React from "react";
import { View, StyleSheet, Image, StatusBar } from "react-native";
import { assets } from "../constants";
import { CircleButton } from "./Button";

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View style={{ width: "100%", height: 373 }}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />

      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        // style={{ top: `${StatusBar.currentHeight + 10}` }}
        left={15}
        top={StatusBar.currentHeight + 10}
      />

      <CircleButton
        imgUrl={assets.heart}
        right={15}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default DetailsHeader;
