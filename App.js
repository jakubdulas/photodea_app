import * as React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";
import Feed from "./Screens/Feed";
import AddPlace from "./Screens/AddPlace";
import Folders from "./Screens/Folders";
import Place from "./Screens/Place";
import TagDetails from "./Screens/TagDetails";
import {
  Feather,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import colors from "./assets/colors";
import AllTags from "./Screens/AllTags";
import Folder from "./Screens/Folder";
import AddToFolder from "./Screens/AddToFolder";
import Search from "./Screens/Search";
import Profile from "./Screens/Profile";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const renderTabItem = (iconName, focused) => {
  let icon;

  switch (iconName) {
    case "home":
      icon = (
        <AntDesign
          name="home"
          size={30}
          color={focused ? colors.tabActive : colors.tabInactive}
        />
      );
      break;
    case "feed":
      icon = (
        <Ionicons
          name="ios-grid-outline"
          size={28}
          color={focused ? colors.tabActive : colors.tabInactive}
        />
      );
      break;
    case "add":
      icon = (
        <Feather
          name="plus-square"
          size={30}
          color={focused ? colors.tabActive : colors.tabInactive}
        />
      );
      break;
    case "folders":
      icon = (
        <Ionicons
          name="ios-folder-outline"
          size={30}
          color={focused ? colors.tabActive : colors.tabInactive}
        />
      );
      break;
    case "map":
      icon = (
        <MaterialCommunityIcons
          name="map-marker-multiple-outline"
          size={30}
          color={focused ? colors.tabActive : colors.tabInactive}
        />
      );
      break;
    case "search":
      icon = (
        <AntDesign
          name="search1"
          size={30}
          color={focused ? colors.tabActive : colors.tabInactive}
        />
      );
      break;
  }

  return <View style={{ top: 13 }}>{icon}</View>;
};

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          left: 15,
          right: 15,
          bottom: 30,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 10,
          height: 65,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.16,
          shadowRadius: 5,
          elevation: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => renderTabItem("home", focused),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused }) => renderTabItem("feed", focused),
        }}
      />
      <Tab.Screen
        name="AddPlace"
        component={AddPlace}
        options={{
          tabBarIcon: ({ focused }) => renderTabItem("add", focused),
        }}
      />
      <Tab.Screen
        name="Folders"
        component={Folders}
        options={{
          tabBarIcon: ({ focused }) => renderTabItem("folders", focused),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => renderTabItem("search", focused),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen component={Main} name="Main" />
          <Stack.Screen
            component={Place}
            name="Place"
            // options={({ navigation }) => ({
            //   headerTransparent: true,
            //   headerShadowVisible: false,
            //   headerLeft: () => <HeaderBack />,
            //   title: "",
            // })}
          />
          <Stack.Screen name="Folder" component={Folder} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            presentation: "modal",
            headerShown: false,
          }}
        >
          <Stack.Screen name="TagDetails" component={TagDetails} />
          <Stack.Screen name="AllTags" component={AllTags} />
          <Stack.Screen
            name="AddToFolder"
            theme={{ colors: { background: "#000000" } }}
            component={AddToFolder}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
