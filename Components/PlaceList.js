import React from "react";
import { View, Text, ScrollView } from "react-native";
import PlaceCard from "./PlaceCard";

const PlaceList = ({ places, modal = false, style = {} }) => {
  return (
    <View
      style={{
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
        ...style,
      }}
    >
      {places?.map((item, index) => (
        <>
          <PlaceCard
            item={item}
            modal={modal}
            style={{
              marginBottom: 10,
              marginTop: index % 2 == 0 ? 0 : 20,
            }}
          />
        </>
      ))}
      {places?.length % 2 != 0 && (
        <View style={{ width: 150, height: 180 }}></View>
      )}
    </View>
  );
};

export default PlaceList;
