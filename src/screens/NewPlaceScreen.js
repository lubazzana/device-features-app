import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

import ImageSelector from "../components/ImageSelector";
import { addPlace } from "../store/place.slice";
import colors from "../utils/colors";
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
    marginBottom: 20
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

  const onHandleTitleChange = (text) => setTitle(text);
  const onHandleSubmit = () => {
    dispatch(addPlace(title));
    navigation.navigate("Place");
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Título</Text>
        <TextInput style={styles.input} placeholder="Nueva ubicación"  onChangeText={onHandleTitleChange} value={title}/>
        <ImageSelector onImage={(image) => console.log(image)} />
        <Button 
          title="Grabar Direccion"
          color={colors.primary}
          onPress={onHandleSubmit}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlaceScreen;
