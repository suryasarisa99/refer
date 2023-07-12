import { useState, useContext } from "react";
import strings from "./strings.json";
import { useNavigate } from "react-router-dom";
import Item from "../components/Item";
import linked_list from "./linked_list.json";
import array from "./array";
import stream from "./stream.json";
import { DataContext } from "../../context/DataContext";
export default () => {
  let { setMethods } = useContext(DataContext);
  let navigate = useNavigate();
  return (
    <div className="lang-page">
      <Item item="Liste Methods" lang="java" data={linked_list} />
      <Item item="String Methods" lang="java" data={strings} />
      <Item item="Array Methods" lang="java" data={array} />
      <Item item="Stream Methods" lang="java" data={stream} />
    </div>
  );
};
