import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const DataContext = createContext();

export function DataContextProvaider(props) {
      const [data, setData] = useState([
            {
                  id: uuidv4(),
                  name: "Quimica",
                  tareas: [],
            },
      ]);
      const [form, setForm] = useState("materia");

      return <DataContext.Provider value={{ data, setData, form, setForm }}>{props.children}</DataContext.Provider>;
}
