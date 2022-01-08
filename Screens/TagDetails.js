import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import colors from "../assets/colors";
import { tags } from "../assets/images/dummy/dummy_data";
import { Feather, MaterialCommunityIcons } from "react-native-vector-icons";
import PlaceList from "../Components/PlaceList";

const TagDetails = ({ navigation, route }) => {
  const [selectedTag, setSelectedTag] = React.useState(null);
  const [tagTitleFontSize, setTagTitleFontSize] = React.useState(30);

  React.useEffect(() => {
    let { tagName } = route.params;
    let tag = tags.find((item) => (item.title = tagName));

    if (tagName.length < 13) {
      setTagTitleFontSize(30);
    } else if (tagName.length < 17) {
      setTagTitleFontSize(20);
    }

    setSelectedTag(tag);
  }, []);

  const followTag = () => {
    setSelectedTag({ ...selectedTag, is_followed: !selectedTag.is_followed });
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView style={{ paddingHorizontal: 20, paddingTop: 40 }}>
        {/* Tag header */}
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginRight: 20 }}>
            <Image
              source={selectedTag?.image}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                resizeMode: "cover",
              }}
            />
          </View>
          <View
            style={{ flexDirection: "column", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: tagTitleFontSize, fontWeight: "500" }}>
              {selectedTag?.title}
            </Text>
            <TouchableOpacity onPress={() => followTag()}>
              <View
                style={{
                  paddingVertical: 7,
                  backgroundColor: selectedTag?.is_followed
                    ? colors.tagBg
                    : colors.followTagBg,
                  borderRadius: 10,
                  width: selectedTag?.is_followed ? 190 : 95,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: selectedTag?.is_followed
                      ? colors.tabActive
                      : colors.followTagText,
                    fontSize: 16,
                  }}
                >
                  {selectedTag?.is_followed
                    ? "Przestań obserwować"
                    : "Obserwuj"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginBottom: 60 }}>
          {/* Tag info */}
          <View
            style={{
              marginTop: 40,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "#ECECEC",
              flexDirection: "row",
              marginBottom: 40,
            }}
          >
            <View style={{ alignItems: "center", width: "50%", padding: 20 }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  backgroundColor: colors.iconsBg,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="map-marker-multiple-outline"
                  size={30}
                  color="#000000"
                />
              </View>
              <Text style={{ fontSize: 20, fontWeight: "400", marginTop: 8 }}>
                {selectedTag?.places.length}
              </Text>
              <Text
                style={{ fontSize: 13, color: "#727272", textAlign: "center" }}
              >
                miejsc oznaczonych tym tagiem
              </Text>
            </View>
            <View style={{ alignItems: "center", width: "50%", padding: 20 }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  backgroundColor: colors.iconsBg,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather color="#000000" name="plus" size={30} />
              </View>
              <Text style={{ fontSize: 20, fontWeight: "400", marginTop: 8 }}>
                {selectedTag?.followed}
              </Text>
              <Text
                style={{ fontSize: 13, color: "#727272", textAlign: "center" }}
              >
                osób obserwuje ten tag
              </Text>
            </View>
          </View>
          {/* Place list */}
          <PlaceList places={selectedTag?.places} modal={true} />
        </View>
      </ScrollView>
    </View>
  );
};

export default TagDetails;
