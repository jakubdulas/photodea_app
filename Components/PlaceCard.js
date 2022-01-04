import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PlaceCard = ({ item, style, showText = true }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ alignItems: "center", ...style }}
      onPress={() => navigation.navigate("Place", { place: item })}
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
      {showText && <Text>{item.name}</Text>}
    </TouchableOpacity>
  );
};

export default PlaceCard;
