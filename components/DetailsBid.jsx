import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { EthPrice } from "./SubInfo";

const DetailsBid = ({ bid }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
      }}
    >
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />

      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Bid Placed By {bid.name}{" "}
        </Text>

        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            coor: COLORS.secondary,
            marginVertical: 2,
          }}
        >
          {bid.date}
        </Text>
      </View>
      <EthPrice price={bid.price} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default DetailsBid;
