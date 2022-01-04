import * as React from "react";
import { View, Text, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";
import Feed from "./Screens/Feed";
import AddPlace from "./Screens/AddPlace";
import Folders from "./Screens/Folders";
import Place from "./Screens/Place";
import HeaderBack from "./Components/HeaderBack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Main = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Feed" component={Feed} />
    <Tab.Screen name="AddPlace" component={AddPlace} />
    <Tab.Screen name="Folders" component={Folders} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Main}
          name="Main"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Place}
          name="Place"
          options={({ navigation }) => ({
            headerTransparent: true,
            headerShadowVisible: false,
            headerLeft: () => <HeaderBack />,
            title: "",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
