import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { folders, places } from "../assets/images/dummy/dummy_data";
import { Feather } from "react-native-vector-icons";
import CreateFolder from "../Components/CreateFolder";

const AddToFolder = ({ place_id }) => {
  const navigation = useNavigation();
  const place = places.find((item) => (item.id = place_id));
  const [createFolderOpened, setCreateFolderOpened] = React.useState(false);

  const [folderList, setFolders] = useState(folders);

  const add_to_folder = (id) => {
    console.log(place);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <CreateFolder
        createFolderOpened={createFolderOpened}
        setCreateFolderOpened={setCreateFolderOpened}
      />
      <View style={{ margin: 20 }}>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            paddingVertical: 10,
            marginBottom: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
              }}
            >
              Dodaj do folderu
            </Text>
            <TouchableOpacity
              style={{
                padding: 5,
                borderColor: "#0d72ff",
                borderWidth: 1,
                borderRadius: 10,
              }}
              onPress={() => setCreateFolderOpened(true)}
            >
              <Text style={{ color: "#0d72ff" }}>Utwórz folder</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={{ height: "85%" }}>
          {folderList?.map((item, index) => (
            <TouchableOpacity
              onPress={() => add_to_folder(item.id)}
              key={item.id}
            >
              <View
                style={{
                  marginTop: 15,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#000000",
                    width: 20,
                    height: 20,
                    borderRadius: 4,
                    marginRight: 10,
                    backgroundColor: item.places.includes(place)
                      ? "#000000"
                      : "#ffffff",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather color="#ffffff" name="check" size={15} />
                </View>
                <Text style={{ fontSize: 20 }}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default AddToFolder;
