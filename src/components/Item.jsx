import { DataContext } from "../../context/DataContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Item({ item, data, lang }) {
  let { setMethods, setLangType } = useContext(DataContext);
  let navigate = useNavigate();
  return (
    <div
      className="item"
      onClick={() => {
        setMethods(data);
        setLangType(lang);
        navigate("/methods");
      }}
    >
      {item}
    </div>
  );
}
