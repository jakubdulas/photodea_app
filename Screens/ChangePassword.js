import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";
import React from "react";
import { MaterialIcons } from "react-native-vector-icons";
import colors from "../assets/colors";
import { useNavigation } from "@react-navigation/native";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [newPassword2, setNewPassword2] = React.useState("");
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
          <Text style={{ fontSize: 20 }}>Zmień hasło</Text>
          <View style={{ width: 20 }} />
        </View>
        <View style={{ marginTop: 20 }}>
          <TextInput
            style={{
              width: "100%",
              borderRadius: 10,
              backgroundColor: colors.searchGray,
              height: 50,
              padding: 10,
              marginTop: 20,
            }}
            secureTextEntry={true}
            placeholder={"Stare hasło"}
            placeholderTextColor={colors.searchPlaceholder}
            value={oldPassword}
            onChangeText={(text) => setOldPassword(text)}
          />

          <TextInput
            style={{
              width: "100%",
              borderRadius: 10,
              backgroundColor: colors.searchGray,
              height: 50,
              padding: 10,
              marginTop: 20,
            }}
            secureTextEntry={true}
            placeholder={"Nowe hasło"}
            placeholderTextColor={colors.searchPlaceholder}
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
          />

          <TextInput
            style={{
              width: "100%",
              borderRadius: 10,
              backgroundColor: colors.searchGray,
              height: 50,
              padding: 10,
              marginTop: 20,
            }}
            secureTextEntry={true}
            placeholder={"Powtórz nowe hasło"}
            placeholderTextColor={colors.searchPlaceholder}
            value={setNewPassword2}
            onChangeText={(text) => setNewPassword2(text)}
          />
          <TouchableOpacity
            style={{
              backgroundColor: colors.black,
              width: "100%",
              height: 50,
              marginTop: 20,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: colors.white, fontSize: 18 }}>
              Zmień hasło
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChangePassword;
