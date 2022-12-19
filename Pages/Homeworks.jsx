import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../Context/DataContext";
import Agregar from "../Components/Agregar";
import ItemTaks from "../Components/ItemTaks";

const Homeworks = ({ navigation, route }) => {
      const { data, setForm, form } = useContext(DataContext);
      const [check, setCheck] = useState(false);
      const indexMateria = data.findIndex((item) => item.id == route.params.id);

      useEffect(() => {
            setInfoTask(materia[0].tareas);
      }, [data]);

      let materia = data.filter((item) => {
            return item.id == route.params.id;
      });
      const [infoTask, setInfoTask] = useState("");

      console.log(infoTask);
      const newTask = () => {
            setForm("tareas");
            navigation.navigate("Form", { id: route.params.id });
      };

      return (
            <View style={styles.container}>
                  <Text style={styles.title}>{route.params.name}</Text>
                  <View style={styles.class}>
                        <FlatList
                              data={infoTask}
                              renderItem={({ item, index }) => {
                                    return <ItemTaks item={item} indexMateria={indexMateria} index={index} />;
                              }}
                        />
                  </View>

                  <Agregar text={"Nueva Tarea"} onPress={newTask} />
            </View>
      );
};

export default Homeworks;
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
});
