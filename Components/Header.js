import { useNavigation } from "@react-navigation/native";
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
import HeaderBack from "./HeaderBack";

const Header = ({
  formOnSubmit,
  formOnChange,
  search = true,
  title = "PHOTODEA",
  button = null,
  logo = true,
}) => {
  const [headerTitleSize, setheaderTitleSize] = React.useState(20);
  const navigation = useNavigation();

  React.useEffect(() => {
    if (title.length < 14) {
      setheaderTitleSize(33);
    } else if (title.length < 17) {
      setheaderTitleSize(28);
    } else if (title.length < 20) {
      setheaderTitleSize(23);
    } else {
      setheaderTitleSize(18);
    }
  }, [title]);

  return (
    <SafeAreaView
      style={{
        left: 0,
        width: "100%",
        position: "relative",
        top: 0,
        // marginTop: StatusBar.currentHeight,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ paddingBottom: 10, width: "100%", paddingHorizontal: 20 }}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
          }}
        >
          {logo ? (
            <>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("Home")}
              >
                <Image
                  source={require("../assets/images/logo.png")}
                  style={{ width: 42, height: 40, resizeMode: "cover" }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("Profile")}
              >
                <Image
                  source={require("../assets/images/profilowe.png")}
                  style={{ width: 34, height: 34, borderRadius: 19 }}
                />
              </TouchableOpacity>
            </>
          ) : (
            <>
              <HeaderBack color="#000000" />
            </>
          )}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {title ? (
            <Text
              style={{
                paddingTop: 7,
                fontWeight: "500",
                fontSize: headerTitleSize,
              }}
            >
              {title}
            </Text>
          ) : (
            <></>
          )}
          {button && (
            <TouchableOpacity onPress={button.onPress}>
              <View
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 7,
                  backgroundColor: colors.darkBtn,
                  borderRadius: 10,
                  marginTop: 9,
                }}
              >
                <Text style={{ color: colors.white }}>{button.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
        {search && (
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
        )}
      </View>
    </SafeAreaView>
  );
};

export default Header;
