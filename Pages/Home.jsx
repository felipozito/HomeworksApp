import { View, Text, Button, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import React, { useState, useContext } from "react";
import { DataContext } from "../Context/DataContext";
import Agregar from "../Components/Agregar";
import "react-native-get-random-values";

export default function Home({ navigation }) {
      const { data, setForm } = useContext(DataContext);

      return (
            <View style={styles.container}>
                  <View>
                        <Text style={styles.title}>Materias</Text>
                  </View>

                  <View style={styles.class}>
                        <FlatList
                              data={data}
                              renderItem={({ item }) => {
                                    return (
                                          <TouchableOpacity
                                                style={styles.buttonClase}
                                                key={item.id}
                                                onPress={() => navigation.navigate("Homeworks", { id: item.id, name: item.name })}
                                          >
                                                <Text style={styles.titleClase}>{item.name}</Text>
                                          </TouchableOpacity>
                                    );
                              }}
                        />
                  </View>

                  <Agregar
                        text={"Agregar +"}
                        onPress={() => {
                              setForm("materias");
                              navigation.navigate("Form");
                        }}
                  />
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "space-between",
      },
      title: {
            marginTop: 20,
            fontSize: 40,
            fontWeight: "bold",
            height: 80,
            color: "#6C79D1",
      },
      class: {
            height: 400,
            width: "100%",
      },
      text: {
            fontSize: 20,
            color: "black",
            textAlign: "center",
      },
      schedule: {
            flexDirection: "row",
      },
      btn: {
            marginHorizontal: 10,
            height: 60,
            width: 60,
            borderRadius: 10,
            borderColor: "#0526FA",
            borderWidth: 1,
      },
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
