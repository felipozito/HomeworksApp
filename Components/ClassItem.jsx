import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import React from "react";

export default function ClassItem({ item, navigation }) {
      return (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Homeworks")}>
                  <Text style={styles.title}>{item.name}</Text>
            </TouchableOpacity>
      );
}
const styles = StyleSheet.create({
      titleClase: {
            marginTop: 10,
            fontSize: 20,
            fontWeight: "bold",
            height: 60,
            color: "#6C79D1",
      },
      buttonClase: {
            marginVertical: 2,
            marginHorizontal: 10,
            width: "90%",
            borderRadius: 10,
            borderColor: "#0526FA",
            borderWidth: 1,
      },
});
