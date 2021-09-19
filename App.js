import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: "Devin" },
          { key: "Dan" },
          { key: "Dominic" },
          { key: "Idiot" },
          { key: "Jack" },
          { key: "Abraham" },
          { key: "Jonathan" },
          { key: "Jameson" },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      ></FlatList>
    </View>
  );
};

export default FlatListBasics;
