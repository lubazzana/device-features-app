import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import ImageSelector from "../components/ImageSelector";
import LocationSelector from "../components/LocationSelector";
import colors from "../utils/colors";
import { savePlace } from "../store/place.slice";
import { useDispatch } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    color: colors.primary,
  },
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 5,
  }
});

const NewPlaceScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState({});

  const onHandleTitleChange = (text) => setTitle(text);
  const onHandleSubmit = () => {
    dispatch(savePlace(title, image, location));
    navigation.navigate("Place");
  }

  const onHandleImageSelect = (imageUrl) => setImage(imageUrl);

  const onHandleLocationSelect = (location) => setLocation(location);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Título</Text>
        <TextInput style={styles.input} placeholder="Nueva ubicacion"  onChangeText={onHandleTitleChange} value={title}/>
        <ImageSelector onImage={onHandleImageSelect} />
        <LocationSelector onLocation={onHandleLocationSelect}/>
        <Button 
          title="Grabar Direccion"
          color={colors.secondary}
          onPress={onHandleSubmit}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlaceScreen;
