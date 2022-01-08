import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PlaceCard = ({ item, style, showText = true, modal = false }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ alignItems: "center", ...style }}
      onPress={() => {
        if (modal) {
          navigation.popToTop();
        }
        navigation.navigate("Place", { place: item });
      }}
    >
      <Image
        source={item.images[0]}
        style={{
          width: 150,
          height: 180,
          resizeMode: "cover",
          borderRadius: 10,
        }}
      />
      {showText && (
        <Text style={{ width: "90%", textAlign: "center", marginTop: 10 }}>
          {item.name.length < 17 ? item.name : item.name.slice(0, 16) + "..."}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default PlaceCard;
