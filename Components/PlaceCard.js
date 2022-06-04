import React from "react";
import { View, Text, Alert, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../assets/colors";

const PlaceCard = ({
  item,
  style,
  showText = true,
  modal = false,
  deleteFromFolder = false,
}) => {
  const navigation = useNavigation();

  const onDeletePlaceClicked = () =>
    Alert.alert("Uwaga", "Czy na pewno chcesz usunąc to miejsce z folderu?", [
      {
        text: "Tak",
        onPress: () => console.log("Tak"),
        style: "cancel",
      },
      { text: "Nie", onPress: () => console.log("Nie") },
    ]);

  return (
    <TouchableOpacity
      disabled={deleteFromFolder}
      activeOpacity={0.8}
      style={{ alignItems: "center", ...style }}
      onPress={() => {
        if (modal) {
          navigation.popToTop();
        }
        navigation.navigate("Place", { place: item });
      }}
    >
      <Image
        source={item.images[0]}
        style={{
          width: 150,
          height: 180,
          resizeMode: "cover",
          borderRadius: 10,
          borderBottomLeftRadius: deleteFromFolder ? 0 : 10,
          borderBottomRightRadius: deleteFromFolder ? 0 : 10,
        }}
      />
      {showText & !deleteFromFolder ? (
        <Text style={{ width: "90%", textAlign: "center", marginTop: 10 }}>
          {item.name.length < 17 ? item.name : item.name.slice(0, 16) + "..."}
        </Text>
      ) : (
        <></>
      )}
      {deleteFromFolder && (
        <TouchableOpacity
          activeOpacity={0.9}
          style={{
            width: "100%",
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.darkBtn,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            marginTop: -20,
          }}
          onPress={onDeletePlaceClicked}
        >
          <Text style={{ color: colors.white, fontWeight: "500" }}>Usuń</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default PlaceCard;
