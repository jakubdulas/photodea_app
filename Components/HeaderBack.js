import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";

const HeaderBack = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.goBack()}
      activeOpacity={0.8}
    >
      <MaterialIcons
        style={{ marginLeft: 10 }}
        color="#ffffff"
        name="arrow-back-ios"
        size={30}
      />
    </TouchableOpacity>
  );
};

export default HeaderBack;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0, 0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
});
