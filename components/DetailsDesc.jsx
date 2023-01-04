import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SIZES, COLORS, FONTS } from "../constants";

import { EthPrice, NFTTitle } from "./SubInfo";

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(true);
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>
      <View style={{ margingVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.font,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
        <View
          style={{
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {text} {  }
            {!readMore && "..."}
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
              }}
              onPress={() => {
                if (readMore) {
                  setText(data.description);
                  setReadMore(!readMore);
                } else {
                  setText(data.description.slice(0, 100));
                  setReadMore(!readMore);
                }
              }}
            >
              {!readMore ? "Show Less" : "Read More"}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default DetailsDesc;
