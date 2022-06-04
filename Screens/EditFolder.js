import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Alert,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  StatusBar,
} from "react-native";
import colors from "../assets/colors";
import fonts from "../assets/fonts";
import Header from "../Components/Header";
import { tags, places, top_users } from "../assets/images/dummy/dummy_data";
import Tag from "../Components/Tag";
import PlaceCard from "../Components/PlaceCard";
import PlaceList from "../Components/PlaceList";

const EditFolder = ({
  selectedFolder,
  editFolderOpened,
  setEditFolderOpened,
}) => {
  const [name, setName] = React.useState(selectedFolder?.name);

  const [headerTitleSize, setheaderTitleSize] = React.useState(20);

  const onDeleteFolderClicked = () =>
    Alert.alert("Uwaga", "Czy na pewno chcesz usunąc ten folder?", [
      {
        text: "Tak",
        onPress: () => {
          console.log("Tak");
          setEditFolderOpened(false);
        },
        style: "cancel",
      },
      { text: "Nie", onPress: () => console.log("Nie") },
    ]);

  return (
    <Modal animationType="slide" transparent={false} visible={editFolderOpened}>
      <View style={{ flex: 1, backgroundColor: colors.white }}>
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
          <View
            style={{ paddingBottom: 10, width: "100%", paddingHorizontal: 20 }}
          >
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={onDeleteFolderClicked}>
                <View
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 7,
                    backgroundColor: colors.darkBtn,
                    borderRadius: 10,
                    marginTop: 9,
                    backgroundColor: colors.darkBtn,
                  }}
                >
                  <Text style={{ color: colors.white }}>Usuń</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setEditFolderOpened(false)}>
                <View
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 7,
                    backgroundColor: colors.darkBtn,
                    borderRadius: 10,
                    marginTop: 9,
                    backgroundColor: "#2ece2e",
                  }}
                >
                  <Text style={{ color: colors.white }}>Zapisz</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>

        <ScrollView
          style={{ paddingHorizontal: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <TextInput
            style={{
              borderRadius: 10,
              backgroundColor: colors.searchGray,
              padding: 10,
              marginTop: 10,
              fontSize: 20,
              fontWeight: "500",
            }}
            placeholder={"Nowa nazwa miejsca"}
            placeholderTextColor={colors.searchPlaceholder}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <PlaceList
            style={{ marginTop: 20 }}
            places={selectedFolder?.places}
            deleteFromFolder={true}
          />
        </ScrollView>
      </View>
    </Modal>
  );
};

export default EditFolder;
