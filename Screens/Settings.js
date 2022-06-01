import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "react-native-vector-icons";
import colors from "../assets/colors";
import { Fontisto, FontAwesome } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
const Settings = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            marginTop: 60,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              color={colors.black}
              name="arrow-back-ios"
              size={20}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20 }}>Ustawienia</Text>
          <View style={{ width: 20 }} />
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
            onPress={() => navigation.navigate("ChangePassword")}
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
              <Fontisto color="#000000" name="locked" size={23} />
            </View>
            <Text style={{ fontSize: 18, marginLeft: 20 }}>Hasło</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
            onPress={() => navigation.navigate("DeactivateAccount")}
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
              <FontAwesome color="#000000" name="user-times" size={23} />
            </View>
            <Text style={{ fontSize: 18, marginLeft: 20 }}>
              Dezaktywacja konta
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Settings;
