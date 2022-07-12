import { Platform, TouchableOpacity } from "react-native";

import IonicIcons from '@expo/vector-icons/Ionicons'
import MapScreen from "../screens/MapScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import PlaceListScreen from "../screens/PlaceListScreen";
import React from "react";
import colors from "../utils/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const PlaceNavigator = () => (
  <Stack.Navigator
    initialRouteName="Place"
    screenOptions={{
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? colors.primary : colors.secondary,
      },
      headerTintColor: Platform.OS === "android" ? colors.white : colors.black,
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <Stack.Screen
      name="Place"
      component={PlaceListScreen}
      options={({ navigation }) => ({ 
        title: "Direcciones",
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("NewPlace")}>
            <IonicIcons
              name="add-circle-outline"
              size={25}
              color={Platform.OS === "android" ? colors.white : colors.black}
              />
          </TouchableOpacity>
        )
      })}
    />
    <Stack.Screen
      name="PlaceDetail"
      component={PlaceDetailScreen}
      options={{ title: "Detalle de Dirección" }}
    />
    <Stack.Screen
      name="NewPlace"
      component={NewPlaceScreen}
      options={{ title: "Nueva Dirección" }}
    />
    <Stack.Screen
      name="Map"
      component={MapScreen}
      options={{ title: "Mapa" }}
    />
  </Stack.Navigator>
);

export default PlaceNavigator;
