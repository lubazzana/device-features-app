import { FlatList, StyleSheet, Text, View } from "react-native";

import PlaceItem from "../components/PlaceItem";
import React from "react";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  }
});

const PlaceListScreen = ({ navigation }) => {
  const places = useSelector((state) => state.place.places);

  const onSelectPlace = (id) => {
    navigation.navigate("PlaceDetail", { placeId: id });
  }
  const renderItem = ({ item }) => (
    <PlaceItem {...item} onSelect={onSelectPlace} />
  )

  const ListEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text>No se ha guardado ningún lugar</Text>
    </View>
  )
  return (
    <FlatList 
      style={styles.container}
      data={places}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

export default PlaceListScreen;
