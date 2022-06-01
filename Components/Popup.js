import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign, Ionicons, MaterialIcons } from "react-native-vector-icons";
import colors from "../assets/colors";
import { useNavigation } from "@react-navigation/native";

const Popup = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column-reverse",
      }}
    >
      <View
        style={{
          flex: 0.35,
          backgroundColor: colors.white,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 100,
              height: 4,
              backgroundColor: "#dddddd",
              borderRadius: 100,
              marginTop: 10,
              marginBottom: -10,
            }}
          ></View>
        </View>
        <View
          style={{
            height: "100%",
            padding: 40,
            justifyContent: "space-between",
          }}
        >
          <View>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  backgroundColor: colors.iconsBg,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AntDesign color="#000000" name="user" size={30} />
              </View>
              <Text style={{ fontSize: 18, marginLeft: 20 }}>
                Edytuj profil
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
              }}
              onPress={() => {
                navigation.popToTop();
                navigation.navigate("Settings");
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  backgroundColor: colors.iconsBg,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons color="#000000" name="settings-outline" size={30} />
              </View>
              <Text style={{ fontSize: 18, marginLeft: 20 }}>Ustawienia</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                backgroundColor: colors.iconsBg,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialIcons color="#000000" name="logout" size={30} />
            </View>
            <Text style={{ fontSize: 18, marginLeft: 20 }}>Wyloguj się</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Popup;
