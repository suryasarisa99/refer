import { useNavigate } from "react-router-dom";
import { FaReact, FaJava, FaPython } from "react-icons/fa";
import { SiKotlin, SiJavascript } from "react-icons/si";
import html from "./html.json";
import W3Items from "./W3Items";
import js from "./js.json";
import java from "./java.json";
import jsref from "./jsref.json";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import python from "./python.json";
// import { BiLogoJavascript } from "react-icons/bi";
export default () => {
  let { setW3Lang, setW3Data } = useContext(DataContext);
  let navigation = useNavigate();
  return (
    <div className="home">
      {/* <Lang lang={"Java"} icon={FaJava} onClick={() => navigation("/java")} /> */}
      <Lang
        lang={"Html"}
        Icon={SiKotlin}
        onClick={() => {
          setW3Lang(html);
          navigation("/w3items");
        }}
      />
      <Lang
        lang={"Js"}
        Icon={SiKotlin}
        onClick={() => {
          setW3Data(js);
          navigation("/w3Heads");
        }}
      />
      <Lang
        lang={"Js Ref"}
        Icon={SiKotlin}
        onClick={() => {
          setW3Data(jsref);
          navigation("/w3Heads");
        }}
      />
      <Lang
        lang={"Java"}
        Icon={SiKotlin}
        onClick={() => {
          setW3Data(java);
          navigation("/w3Heads");
        }}
      />
      <Lang
        lang={"Python"}
        Icon={SiKotlin}
        onClick={() => {
          setW3Data(python);
          navigation("/w3Heads");
        }}
      />
    </div>
  );
};

function Lang({ lang, onClick, Icon }) {
  return (
    <div className="lang" onClick={onClick}>
      {lang}
    </div>
  );
}
