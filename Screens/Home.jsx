import React, { useState } from "react";

// import React from "react";
import { View, SafeArea, FlatList, Text, SafeAreaView } from "react-native";

// ? Constants
import { assets, COLORS, SHADOWS, SIZES, FONTS, NFTData } from "../constants";

// ? Home imports
import { HomeHeader, NFTCard, FocusedStatusBar } from "../components/Index";

const Home = () => {
  const [nftDatas, setNftDatas] = useState(NFTData);

  // ? hanldeSearch

  const hanldeSearch = (value) => {
    if (!value.length) return setNftDatas(NFTData);
    const filteredData = nftDatas.filter((item) => item.name.toLowerCase().includes(value))

    if(filteredData.length){
      setNftDatas(filteredData)
    }else{
      setNftDatas(NFTData)
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftDatas}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={hanldeSearch} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgrondColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
