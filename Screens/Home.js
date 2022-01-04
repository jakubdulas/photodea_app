import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import colors from "../assets/colors";
import fonts from "../assets/fonts";
import Header from "../Components/Header";
import { tags, places, top_users } from "../assets/images/dummy/dummy_data";
import Tag from "../Components/Tag";
import PlaceCard from "../Components/PlaceCard";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <Header />

      <ScrollView
        style={{ paddingLeft: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Popularne tagi */}
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}
        >
          <Text style={{ ...fonts.h3 }}>Popularne tagi</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 15, marginLeft: 15, color: "#BCBCBC" }}>
              zobacz wszystkie
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{ marginTop: 15 }}
          data={tags}
          renderItem={({ item, index }) => (
            <Tag
              key={index}
              style={{ marginLeft: index == 0 ? 0 : 20 }}
              item={item}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        {/* Najbardziej lubiane */}
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 25 }}
        >
          <Text style={{ ...fonts.h3 }}>Najbardziej lubiane</Text>
        </View>
        <FlatList
          style={{ marginTop: 15 }}
          data={places}
          renderItem={({ item, index }) => (
            <PlaceCard
              key={index}
              style={{ marginLeft: index == 0 ? 0 : 20 }}
              item={item}
              showText={false}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        {/* Ostatnio dodane */}
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 25 }}
        >
          <Text style={{ ...fonts.h3 }}>Ostatnio dodane</Text>
        </View>
        <FlatList
          style={{ marginTop: 15 }}
          data={places}
          renderItem={({ item, index }) => (
            <PlaceCard
              key={index}
              style={{ marginLeft: index == 0 ? 0 : 20 }}
              item={item}
              showText={false}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        {/* Topowi użytkownicy */}
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 25 }}
        >
          <Text style={{ ...fonts.h3 }}>Topowi użytkownicy</Text>
        </View>

        {top_users.map((item, index) => {
          let color = "";

          switch (index) {
            case 0:
              color = "#F6B900";
              break;
            case 1:
              color = "#BFBFBF";
              break;
            case 2:
              color = "#BF5401";
              break;
          }

          return (
            <View
              style={{
                flexDirection: "row",
                marginRight: 20,
                marginTop: index == 0 ? 20 : 10,
                marginBottom: index == 2 ? 35 : 0,
              }}
            >
              <View style={{ flexDirection: "row", width: "15%" }}>
                <Text style={{ fontSize: 30, marginTop: 15, color: color }}>
                  #
                </Text>
                <Text style={{ fontSize: 60, fontWeight: "500", color: color }}>
                  {index + 1}
                </Text>
              </View>
              <Image
                source={item.image}
                style={{
                  resizeMode: "cover",
                  width: 90,
                  height: 90,
                  borderRadius: 45,
                  marginLeft: 25,
                }}
              />
              <View style={{ marginLeft: 20, justifyContent: "space-evenly" }}>
                <Text style={{ color: color, fontSize: 20, fontWeight: "400" }}>
                  {item.username}
                </Text>
                <Text>{item.places} miejsca</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Home;

// const styles = StyleSheet({});
