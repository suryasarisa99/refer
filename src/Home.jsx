import { useNavigate } from "react-router-dom";
import { FaReact, FaJava, FaPython } from "react-icons/fa";
import { SiKotlin, SiJavascript } from "react-icons/si";
// import { BiLogoJavascript } from "react-icons/bi";
export default () => {
  let navigation = useNavigate();
  return (
    <div className="home">
      <Lang lang={"Java"} icon={FaJava} onClick={() => navigation("/java")} />
      <Lang
        lang={"Kotlin"}
        Icon={SiKotlin}
        onClick={() => navigation("/kotlin")}
      />
      <Lang
        lang={"python"}
        Icon={FaPython}
        onClick={() => navigation("/python")}
      />
      <Lang
        lang={"Java Script"}
        Icon={SiJavascript}
        onClick={() => navigation("/js")}
      />
      <Lang
        lang={"React"}
        Icon={FaReact}
        onClick={() => navigation("/react")}
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
