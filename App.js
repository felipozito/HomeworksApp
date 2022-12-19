import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { React, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Pages/Home";
import Homeworks from "./Pages/Homeworks";
import Form from "./Pages/Form";
import { DataContextProvaider } from "./Context/DataContext";

function App() {
      const Stack = createNativeStackNavigator();
      return (
            <DataContextProvaider>
                  <NavigationContainer>
                        <Stack.Navigator initialRouteName="Home">
                              <Stack.Screen name="Home" component={Home} />
                              <Stack.Screen name="Homeworks" component={Homeworks} />
                              <Stack.Screen name="Form" component={Form} />
                        </Stack.Navigator>
                        <StatusBar style="auto" />
                  </NavigationContainer>
            </DataContextProvaider>
      );
}

export default App;
