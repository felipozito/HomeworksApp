import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Agregar = ({ text, onPress }) => {
      return (
            <TouchableOpacity style={styles.add} onPress={onPress}>
                  <Text style={styles.add_text}>{text}</Text>
            </TouchableOpacity>
      );
};

const styles = StyleSheet.create({
      add: {
            height: 60,
            width: 200,
            backgroundColor: "#6C79D1",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
      },
      add_text: {
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
      },
});
export default Agregar;
