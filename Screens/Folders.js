import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Modal,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from "react-native";
import colors from "../assets/colors";
import fonts from "../assets/fonts";
import Header from "../Components/Header";
import {
  tags,
  places,
  top_users,
  folders,
} from "../assets/images/dummy/dummy_data";
import Tag from "../Components/Tag";
import PlaceCard from "../Components/PlaceCard";
import CreateFolder from "../Components/CreateFolder";

const Folders = () => {
  const navigation = useNavigation();
  const [usersFolders, setUsersFolders] = React.useState(null);
  const [createFolderOpened, setCreateFolderOpened] = React.useState(false);

  React.useEffect(() => {
    setUsersFolders(folders);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <Header
        button={{
          title: "Stwórz folder",
          onPress: () => setCreateFolderOpened(true),
        }}
        title="Foldery"
      />

      <CreateFolder
        createFolderOpened={createFolderOpened}
        setCreateFolderOpened={setCreateFolderOpened}
      />
      <ScrollView
        style={{ paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 80,
          }}
        >
          {usersFolders?.map((item) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Folder", { folder: item })}
            >
              <View
                style={{
                  width: 150,
                  height: 100,
                  resizeMode: "cover",
                  borderRadius: 10,
                  marginBottom: 40,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  {item?.places?.map((place, index) => {
                    if (index == 3) {
                      return;
                    }
                    return (
                      <>
                        <Image
                          style={{
                            width: 90,
                            height: 100,
                            marginLeft: index == 0 ? 0 : -60,
                            zIndex: 3 - index,
                            resizeMode: "cover",
                            borderRadius: 10,
                            borderColor: colors.white,
                            borderWidth: 2,
                          }}
                          source={place?.images[0]}
                        />
                        {item?.places.length - 1 == index &&
                          [...Array(3 - item?.places.length)].map((x, i) => (
                            <View
                              style={{
                                width: 90,
                                height: 100,
                                marginLeft: -60,
                                zIndex: item?.places.length - 1 - i,
                                borderRadius: 10,
                                borderColor: colors.white,
                                borderWidth: 2,
                                backgroundColor: "#cacaca",
                              }}
                            ></View>
                          ))}
                      </>
                    );
                  })}
                </View>
                <Text>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}

          {usersFolders?.length % 2 != 0 && (
            <View
              style={{
                width: 150,
                height: 180,
                resizeMode: "cover",
                borderRadius: 10,
              }}
            ></View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Folders;

// const styles = StyleSheet({});
