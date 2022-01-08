import React from "react";
import {
  View,
  Text,
  Image,
  Animated,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import colors from "../assets/colors";
import dummy_data from "../assets/data/dummy_data";
import fonts from "../assets/fonts";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Feather, Ionicons } from "react-native-vector-icons";
import Tag from "../Components/Tag";
import HeaderBack from "../Components/HeaderBack";

const HEADER_HEIGHT = 350;

const actionIcons = [
  {
    title: "Like",
    onClick: () => {
      Alert.alert("Like place", "Are you sure you want to like this place?");
    },
    icon: () => <AntDesign color="#000000" name="hearto" size={23} />,
  },
  {
    title: "Add to folder",
    onClick: () => {
      Alert.alert(
        "Add the place to folder",
        "Are you sure you want to add the place to folder?"
      );
    },
    icon: () => <Feather color="#000000" name="plus" size={30} />,
  },
  {
    title: "Navigate",
    onClick: () => {
      Alert.alert("Navigate", "To do");
    },
    icon: () => <Feather color="#000000" name="navigation" size={23} />,
  },
  {
    title: "Instagram post",
    onClick: () => {
      Alert.alert("Instagram post", "You will be moved to Instagram soon");
    },
    icon: () => <AntDesign color="#000000" name="instagram" size={25} />,
  },
  {
    title: "Share",
    onClick: () => {
      Alert.alert("Share place", "Show this place your friends");
    },
    icon: () => (
      <Ionicons color="#000000" name="share-social-outline" size={23} />
    ),
  },
];

const Place = ({ route }) => {
  const [selectedPlace, setSelectedPlace] = React.useState(null);
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  React.useEffect(() => {
    let { place } = route.params;
    setSelectedPlace(place);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollY,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        style={{
          backgroundColor: colors.white,
        }}
      >
        <View
          style={{
            marginTop: -1000,
            paddingTop: 1000,
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Animated.Image
            source={selectedPlace?.images[0]}
            style={{
              height: HEADER_HEIGHT,
              width: "200%",
              transform: [
                {
                  //   obrazek idzie w góre i w dół w zależności od scrollowania
                  translateY: scrollY.interpolate({
                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                    outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
                  }),
                },
                {
                  //   obrazek się powiększa lub zmniejsza podczas scrollowania
                  scale: scrollY.interpolate({
                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                    outputRange: [2, 1, 0.75],
                  }),
                },
              ],
            }}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 20,
            borderRadius: 10,
            marginTop: -10,
            backgroundColor: colors.white,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Text style={{ ...fonts.h1, width: "70%" }}>
              {selectedPlace?.name}
            </Text>
            {/* <TouchableOpacity onPress={()=> navigation.navigate('')}> */}
            <Image
              source={selectedPlace?.user?.image}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                resizeMode: "cover",
              }}
            />
            {/* </TouchableOpacity> */}
          </View>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <FlatList
              data={actionIcons}
              keyExtractor={(item) => item.title}
              horizontal
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <TouchableOpacity onPress={item.onClick}>
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 8,
                      backgroundColor: colors.iconsBg,
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: index === 0 ? 0 : 20,
                    }}
                  >
                    {item.icon()}
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 20, color: "#999999" }}>
              {selectedPlace?.description}
            </Text>
          </View>
        </View>
        <FlatList
          style={{ marginLeft: 20, marginTop: 25 }}
          data={selectedPlace?.images.slice(1)}
          keyExtractor={(item, index) => index}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              style={{ alignItems: "center", marginLeft: index === 0 ? 0 : 20 }}
              onPress={() => Alert.alert("Show image", "image")}
            >
              <Image
                source={item}
                style={{
                  width: 150,
                  height: 180,
                  resizeMode: "cover",
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          )}
        />
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 40,
            marginBottom: 60,
          }}
        >
          <Text style={{ fontSize: 20 }}>Tagi</Text>
          <View
            style={{
              flexWrap: "wrap",
              flexDirection: "row",
            }}
          >
            {selectedPlace?.tags.map((item, index) => (
              <>
                <Tag
                  key={index}
                  item={item}
                  style={{ marginRight: 10, marginTop: 10 }}
                />
              </>
            ))}
          </View>
        </View>
      </Animated.ScrollView>

      {/* Header bar */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 90,
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingBottom: 10,
        }}
      >
        {/* Screen Overlay */}
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#ffffff",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
              outputRange: [0, 1],
            }),
          }}
        />
        {/* Header Bar Title */}
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: "flex-end",
            alignItems: "center",
            paddingBottom: 20,
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
              outputRange: [0, 1],
            }),
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                  outputRange: [50, 0],
                  extrapolate: "clamp",
                }),
              },
            ],
          }}
        >
          <Text style={{ color: "#000000" }}>{selectedPlace?.name}</Text>
        </Animated.View>

        <HeaderBack
          style={{
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
              outputRange: [1, 0],
            }),
          }}
        />

        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 35,
            height: 35,
          }}
        ></TouchableOpacity>
      </View>
    </View>
  );
};

export default Place;
