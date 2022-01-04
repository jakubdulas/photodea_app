import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import colors from "../assets/colors";
import fonts from "../assets/fonts";

const Header = ({ formOnSubmit }) => {
  return (
    <SafeAreaView
      style={{
        left: 0,
        width: "100%",
        position: "sticky",
        top: 0,
        marginTop: StatusBar.currentHeight,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ paddingBottom: 20, width: "100%", paddingHorizontal: 20 }}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity activeOpacity={0.8}>
            <Image
              source={require("../assets/images/logo.png")}
              style={{ width: 42, height: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <Image
              source={require("../assets/images/profilowe.png")}
              style={{ width: 34, height: 34, borderRadius: 19 }}
            />
          </TouchableOpacity>
        </View>
        <Text style={{ paddingTop: 7, ...fonts.logo }}>PHOTODEA</Text>
        <TextInput
          style={{
            width: "100%",
            borderRadius: 10,
            backgroundColor: colors.searchGray,
            height: 40,
            padding: 10,
            marginTop: 10,
          }}
          placeholder={"Szukaj"}
          placeholderTextColor={colors.searchPlaceholder}
        />
      </View>
    </SafeAreaView>
  );
};

export default Header;
