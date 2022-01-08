import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import colors from "../assets/colors";
import { useNavigation } from "@react-navigation/native";

const Tag = ({ item, style }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        ...style,
        padding: 10,
        backgroundColor: colors.tagBg,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
      }}
      onPress={() =>
        navigation.navigate("TagDetails", { tagName: item?.title })
      }
    >
      {item?.image && (
        <Image
          source={item.image}
          style={{ width: 20, height: 20, borderRadius: 5, marginRight: 10 }}
        />
      )}
      <Text>{item?.title}</Text>
    </TouchableOpacity>
  );
};

export default Tag;
