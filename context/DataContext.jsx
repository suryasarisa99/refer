import { createContext, useState } from "react";
import java_array from "../data/java_array.json";
import java_linked_list from "../data/java_linked_list.json";
import java_strings from "../data/java_strings.json";

import js_lists from "../data/js_list.json";
import py_strings from "../data/py_strings.json";

const DataContext = createContext();
export default ({ children }) => {
  let data = [
    {
      /* lang.data */
      data: [
        { methods: java_array, type: "Array" },
        { methods: java_strings, type: "String" },
        { methods: java_linked_list, type: "linked List" },

        // java_linked_list,
        // java_strings,
      ],
      type: "java",
    },
    { data: [{ methods: js_lists, type: "List" }], type: "js" },
    { data: [{ methods: py_strings, type: "String" }], type: "js" },
    // { data: [], type: "java" },
    // { data: [], type: "java" },
    // { data: [], type: "java" },
  ];
  let [methods, setMethods] = useState([]);
  let [w3Lang, setW3Lang] = useState([]);
  let [w3Data, setW3Data] = useState([]);
  let [w3Head, setW3Head] = useState([]);
  let [w3SubHead, setW3SubHead] = useState([]);
  let [w3Item, setW3Item] = useState([]);
  let [langType, setLangType] = useState("");
  return (
    <DataContext.Provider
      value={{
        setMethods,
        methods,
        data,
        setLangType,
        langType,
        w3Lang,
        setW3Lang,
        w3Data,
        setW3Data,
        w3Head,
        setW3Head,
        w3SubHead,
        setW3SubHead,
        w3Item,
        setW3Item,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext };
