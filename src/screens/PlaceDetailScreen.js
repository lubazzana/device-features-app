import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import MapPreview from "../components/MapPreview";
import React from "react";
import colors from "../utils/colors";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    marginVertical: 20,
  },
  title: {
    padding: 20,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary
  },
  image: {
    height: "40%",
    minHeight: 300,
    width: "100%",
  },
  location: {
    margin: 20,
    width: "90%",
    maxWidth: 350,
    backgroundColor: colors.white,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: colors.primary,
    textAlign: "center",
  },
  map: {
    height: 300,
  }
});

const PlaceDetailScreen = ({ navigation, route }) => {
  const { placeId } = route.params;
  const place = useSelector((state) => state.place.places.find((item) => item.id === placeId));
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={titleContainer}>
        <Text style={styles.title}>{place.title}</Text>
        <Image source={{ uri: place.image }} style={styles.image} />
      </View>
      <View style={styles.location}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{place.address}</Text>
        </View>
        <MapPreview 
        location={{
          lat: place.coords.lat,
          lng: place.coords.lng
        }}
        style={styles.map}
        >
          <Text>Ubicación no disponible</Text>
        </MapPreview>
      </View>
    </ScrollView>
  );
};

export default PlaceDetailScreen;
