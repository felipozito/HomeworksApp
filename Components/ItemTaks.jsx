import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React, { useState, useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { Icon } from "@rneui/themed";

const ItemTaks = ({ item, indexMateria, index }) => {
      const { data } = useContext(DataContext);
      const [check, setCheck] = useState(false);
      const editTask = () => {
            console.log("Falta");
      };
      return (
            <View style={styles.buttonClase} key={item.id}>
                  <Text style={styles.titleClase}>{item.task}</Text>
                  <View style={styles.tools}>
                        <Button
                              title={item.status ? "complete" : "Incomplete"}
                              color={item.status ? "green" : "red"}
                              onPress={() => {
                                    setCheck(!check);
                                    console.log(indexMateria);
                                    data[indexMateria].tareas[index].status = check;
                              }}
                        />
                        <TouchableOpacity onPress={editTask}>
                              <Icon name="edit" />
                        </TouchableOpacity>
                  </View>
            </View>
      );
};

export default ItemTaks;
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
            fontSize: 16,
            fontWeight: "bold",
            height: 60,
            color: "black",
      },
      buttonClase: {
            marginVertical: 2,
            marginHorizontal: 10,
            width: "90%",
            borderRadius: 10,
            borderColor: "#0526FA",
            borderWidth: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
      },
      tools: {
            flexDirection: "row",
      },
});
