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
import EditFolder from "./EditFolder";

const Folder = ({ navigation, route }) => {
  const [selectedFolder, setSelectedFolder] = React.useState(null);
  const [editFolderOpened, setEditFolderOpened] = React.useState(false);

  React.useEffect(() => {
    let { folder } = route.params;
    setSelectedFolder(folder);
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <Header
        search={false}
        button={{
          title: "Edytuj folder",
          onPress: () => setEditFolderOpened(true),
        }}
        title={selectedFolder?.name}
        logo={false}
      />
      <EditFolder
        selectedFolder={selectedFolder}
        setEditFolderOpened={setEditFolderOpened}
        editFolderOpened={editFolderOpened}
      />

      <ScrollView
        style={{ paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <PlaceList style={{ marginTop: 20 }} places={selectedFolder?.places} />
      </ScrollView>
    </View>
  );
};

export default Folder;
