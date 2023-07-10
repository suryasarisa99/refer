import { useState, useContext } from "react";

import Item from "../components/Item";
import list from "./list.json";
// import strings from "./strings.json";
export default () => {
  return (
    <div className="lang-page">
      <Item item="Liste Methods" data={list} />
    </div>
  );
};
