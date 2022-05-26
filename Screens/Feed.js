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
  StatusBar,
} from "react-native";
import colors from "../assets/colors";
import fonts from "../assets/fonts";
import Header from "../Components/Header";
import { tags, places, top_users } from "../assets/images/dummy/dummy_data";
import Tag from "../Components/Tag";
import PlaceCard from "../Components/PlaceCard";
import PlaceList from "../Components/PlaceList";

const Feed = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar barStyle="dark-content" />
      <Header search={false} title="" />

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

export default Feed;

// const styles = StyleSheet({});
