import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import React from "react";
import { MaterialIcons } from "react-native-vector-icons";
import colors from "../assets/colors";
import { Fontisto, FontAwesome } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const DeactivateAccount = () => {
  const navigation = useNavigation();
  const [code, setCode] = React.useState("");
  const [rewrittenCode, setRewrittenCode] = React.useState("");

  const generateCode = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setCode(result);
  };

  React.useEffect(() => {
    generateCode();
  }, []);

  const onFormSubmit = () => {
    console.log(code);
    console.log(rewrittenCode);

    if (code == rewrittenCode) {
      Alert.alert("Alert", "Dezaktywowano konto");
    } else {
      Alert.alert("Alert", "Przepisany kod nie zgadza się");
      generateCode();
    }
  };
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
          <Text style={{ fontSize: 20 }}>Dezaktywuj konto</Text>
          <View style={{ width: 20 }} />
        </View>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              padding: 20,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "#CCCCCC",
            }}
          >
            <Text style={{ fontSize: 17 }}>
              Pamiętaj! Po dezaktywacji konta nie będziesz mógł/mogła stworzyć
              konta o tym emailu. Twoje konto nie zostanie usunięte, ale nie
              będzie można go wyszukać. Miejsca, które dodałeś/aś nie zostaną
              usunięte.
            </Text>
          </View>
          <View
            style={{
              padding: 20,
            }}
          >
            <Text style={{ fontSize: 17 }}>
              Aby dezaktywować konto przepisz podany poniżej kod i kliknij
              "Dezaktywuj na zawsze":
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "500" }}>{code}</Text>
          </View>
          <TextInput
            style={{
              width: "100%",
              borderRadius: 10,
              backgroundColor: colors.searchGray,
              height: 50,
              padding: 10,
              marginTop: 20,
            }}
            value={rewrittenCode}
            onChangeText={(text) => setRewrittenCode(text)}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#FF0000",
              width: "100%",
              height: 50,
              marginTop: 20,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={onFormSubmit}
          >
            <Text style={{ color: colors.white, fontSize: 18 }}>
              Dezaktywuj na zawsze
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DeactivateAccount;
