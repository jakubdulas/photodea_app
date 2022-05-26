import { View, Text, StatusBar, ScrollView } from "react-native";
import React from "react";
import Header from "../Components/Header";
import { tags, places, top_users } from "../assets/images/dummy/dummy_data";
import PlaceList from "../Components/PlaceList";

const Search = () => {
  return (
    <View style={{ backgroundColor: "#ffffff", flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Header title={""} />
      <ScrollView
        style={{ paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <PlaceList
          places={places}
          style={{ marginTop: 10, marginBottom: 120 }}
        />
      </ScrollView>
    </View>
  );
};

export default Search;
