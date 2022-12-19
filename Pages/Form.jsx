import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from "react-native";
import React, { useContext, useState } from "react";
import { DataContext } from "../Context/DataContext";
import Agregar from "../Components/Agregar";
import { v4 as uuidv4 } from "uuid";

const Form = ({ navigation, route }) => {
      const { data, setData, form } = useContext(DataContext);
      const [txtTitle, setTxtTitle] = useState("");
      const addMateria = () => {
            const newMateria = {
                  id: uuidv4(),
                  name: txtTitle,
                  tareas: [],
            };
            setData([...data, newMateria]);
            navigation.navigate("Home");
      };
      const addTarea = () => {
            const materiaId = route.params.id;
            const newTask = {
                  id: uuidv4(),
                  task: txtTitle,
                  status: false,
            };
            let index = data.findIndex((item) => item.id == materiaId);
            const newArray = data;
            newArray[index].tareas.push(newTask);
            setData(newArray);
            navigation.navigate("Homeworks", { id: materiaId, name: data[index].name });
      };

      const [date, setDate] = useState(new Date(1598051730000));
      const [mode, setMode] = useState("date");
      const [show, setShow] = useState(false);

      const onChange = (event, selectedDate) => {
            const currentDate = selectedDate;
            setShow(false);
            setDate(currentDate);
      };

      const showMode = (currentMode) => {
            if (Platform.OS === "android") {
                  setShow(false);
                  // for iOS, add a button that closes the picker
            }
            setMode(currentMode);
      };

      const showDatepicker = () => {
            showMode("date");
      };

      return (
            <View style={styles.container}>
                  <Text style={styles.title}>{form == "materias" ? "Nueva Materia" : "Nueva Tarea"}</Text>
                  <TextInput
                        style={styles.input}
                        onChangeText={setTxtTitle}
                        value={txtTitle}
                        placeholder={form == "materias" ? "Nombre de la Materia" : "Ingrese la Tarea"}
                  ></TextInput>

                  <View style={styles.form}>
                        <Agregar onPress={form == "tareas" ? addTarea : addMateria} text="Guardar " />
                  </View>
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
      },
      input: {
            height: 50,
            width: 200,
            marginHorizontal: 20,
            marginVertical: 20,
            borderWidth: 1,
            borderColor: "#ccc",
      },
      form: {
            flexDirection: "row",
            justifyContent: "space-evenly",
      },
      title: {
            marginTop: 20,
            fontSize: 40,
            fontWeight: "bold",
            height: 80,
            color: "#6C79D1",
      },
});
export default Form;
