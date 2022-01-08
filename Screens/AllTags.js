import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import colors from "../assets/colors";
import { tags } from "../assets/images/dummy/dummy_data";

const AllTags = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={{ paddingHorizontal: 20, paddingTop: 30 }}>
        <Text style={{ fontSize: 30, fontWeight: "500" }}>Wszystkei tagi</Text>
        <TextInput
          style={{
            width: "100%",
            borderRadius: 10,
            backgroundColor: colors.searchGray,
            height: 40,
            padding: 20,
            marginTop: 20,
            fontSize: 15,
          }}
          placeholder={"Szukaj"}
          placeholderTextColor={colors.searchPlaceholder}
        />
      </View>
      <FlatList
        style={{
          marginTop: 10,
        }}
        data={tags}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => (
          <>
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate("TagDetails", { tagName: item.title })
              }
            >
              <View
                style={{
                  paddingLeft: 20,
                  alignItems: "flex-start",
                  marginTop: 20,
                  marginBottom: tags.length - 1 == index ? 50 : 0,
                }}
              >
                <Text style={{ fontSize: 20 }}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  );
};

export default AllTags;
