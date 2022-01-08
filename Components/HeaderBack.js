import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";

const HeaderBack = ({ color = "#ffffff" }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: color == "#ffffff" ? "rgba(0,0,0, 0.3)" : "#ffffff",
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={() => navigation.goBack()}
      activeOpacity={0.8}
    >
      <MaterialIcons
        style={{ marginLeft: color == "#ffffff" ? 10 : 0 }}
        color={color}
        name="arrow-back-ios"
        size={30}
      />
    </TouchableOpacity>
  );
};

export default HeaderBack;
