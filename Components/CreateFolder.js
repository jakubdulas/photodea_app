import { View, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import React from "react";
import colors from "../assets/colors";
import { AntDesign } from "react-native-vector-icons";

const CreateFolder = ({ createFolderOpened, setCreateFolderOpened }) => {
  const [folderName, setFolderName] = React.useState("");

  const onButtonClicked = () => {
    setCreateFolderOpened(false);
    setFolderName("");
  };

  return (
    <Modal animationType="fade" transparent={true} visible={createFolderOpened}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#aaaaaa00",
        }}
      >
        <View
          style={{
            width: "90%",
            backgroundColor: colors.white,
            borderRadius: 10,
            shadowColor: "#000",
            marginTop: -50,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.16,
            shadowRadius: 5,
            elevation: 5,
            padding: 10,
            marginTop: -100,
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View style={{ width: 20 }} />
            <Text style={{ fontSize: 20, fontWeight: "500" }}>
              Stwórz folder
            </Text>
            <TouchableOpacity onPress={() => setCreateFolderOpened(false)}>
              <AntDesign name="close" size={30} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              height: 1,
              marginTop: 10,
              backgroundColor: "#AAA",
            }}
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
            placeholder={"Nazwa folderu"}
            placeholderTextColor={colors.searchPlaceholder}
            value={folderName}
            onChangeText={(text) => setFolderName(text)}
          />
          <TouchableOpacity
            style={{
              backgroundColor: colors.black,
              width: "100%",
              height: 50,
              marginTop: 10,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={onButtonClicked}
          >
            <Text style={{ color: colors.white, fontSize: 18 }}>Stwórz</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CreateFolder;
