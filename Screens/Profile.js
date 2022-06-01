import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "react-native-vector-icons";
import colors from "../assets/colors";
import PlaceList from "../Components/PlaceList";
import { places } from "../assets/images/dummy/dummy_data";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const [selectedOption, setSelectedOption] = React.useState("added_places");
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View>
        <View
          style={{
            backgroundColor: "#000000",
            paddingHorizontal: 20,
            height: 165,
            paddingVertical: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-outline" size={30} color="#ffffff" />
            </TouchableOpacity>
            <Text style={{ color: "#ffffff" }}>@jakubdulas</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfilePopup")}
            >
              <Ionicons name="ios-menu-outline" size={30} color="#ffffff" />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10 }}>
            <Image
              source={require("../assets/images/dummy/profiloweJD.jpg")}
              style={{
                width: 120,
                height: 120,
                borderRadius: 60,
                borderWidth: 4,
                borderColor: "#ffffff",
              }}
            />
          </View>
        </View>
        <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={{ fontSize: 25 }}>Jakub Dulas</Text>
              <Text style={{ fontSize: 12, marginTop: 5, color: "#AAAAAA" }}>
                Dołączył/a: 18.08.2021
              </Text>
            </View>
            <View>
              <TouchableOpacity>
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
                  <AntDesign color="#000000" name="instagram" size={25} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          marginTop: 30,
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity onPress={() => setSelectedOption("added_places")}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: selectedOption == "added_places" ? "bold" : "400",
            }}
          >
            Dodane miejsca
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedOption("liked_places")}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: selectedOption == "liked_places" ? "bold" : "400",
            }}
          >
            Polubione miejsca
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#AAAAAA",
          marginTop: 3,
        }}
      ></View>
      <ScrollView
        style={{ paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <PlaceList places={places} style={{ marginVertical: 20 }} />
      </ScrollView>
    </View>
  );
};

export default Profile;
