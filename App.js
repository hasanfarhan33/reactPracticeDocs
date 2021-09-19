import React, { useState } from "react";
import { Text, View, Image, ScrollView, TextInput } from "react-native";

const YourApp = () => {
  const myName = "Goomba";
  const getFullName = (firstName, secondName) => {
    return firstName + " " + secondName;
  };

  return (
    <ScrollView>
      <Text>This text is inside scroll view</Text>
      <View>
        <Text>My name is {myName}.</Text>
        <Text>My name is {getFullName("Farhan", "Hasan")}</Text>
        <Image
          source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
          style={{ width: 150, height: 150 }}
        ></Image>
      </View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        defaultValue="You can type whatever the hell you wanna type here"
      ></TextInput>
    </ScrollView>
  );
};

export default YourApp;
