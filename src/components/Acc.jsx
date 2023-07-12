import "./acc.css";
import { motion, animate, AnimatePresence } from "framer-motion";
import { AiFillCaretDown } from "react-icons/ai";
// import "./prism.css";
// import Prism from "./prism.js";
import { useEffect, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  dracula,
  docco,
  colorBrewer,
  a11yDark,
  atomOneDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";
export default ({ data, state, index, onClick, lang, group }) => {
  // useEffect(() => {
  //   Prism.highlightAll();
  // }, []);
  let { langType } = useContext(DataContext);
  return (
    <div className="acc">
      <div className="acc-head" onClick={() => onClick(index)}>
        {group && (
          <p className="secondary-head">
            <span className="lang-type">{lang}</span> |{" "}
            <span className="group-type">{group}</span>
          </p>
        )}
        <div className="head">
          <div className="title">
            {index} {data.name}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {state == index && (
          <motion.div
            initial={{ height: state == index ? 100 : "auto", opacity: 0.5 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0 }}
            // transition={{ duration:  }}
          >
            <div className="acc-body">
              {/* <h4 className="syntax">{data.syntax}</h4> */}
              {langType == "java" ? (
                <JavaSyntax syntax={data.syntax} />
              ) : (
                <Syntax syntax={data.syntax} />
              )}
              {/* <Syntax syntax={data.syntax} /> */}
              <p className="keypoints">{data.keypoints || data.description}</p>
              {data.attributes && <Properties props={data.attributes} />}
              {data.examples.map((example, index) => {
                if (typeof example === "string")
                  return (
                    <div>
                      <CodeBlock code={example} langType={langType} />
                      {data?.output?.length >= index - 1 &&
                        data?.output[index] && (
                          <Output output={data.output[index]} />
                        )}
                    </div>
                  );
                else {
                  return (
                    <div>
                      <CodeBlock code={example.example} langType={langType} />
                      {example.output && (
                        <div className="output-box">
                          <div className="output-title">Output: </div>
                          <div className="output">{example.output}</div>
                        </div>
                      )}
                    </div>
                  );
                }
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function JavaSyntax({ syntax }) {
  // let syntax = "int methodName (int  x  ,int y, int z )";
  let reg = RegExp(
    "(?<returntype>.+)\\s+(?<function>\\w+)\\s*\\((?<params>[^)]*)\\)"
  );
  let match = reg.exec(syntax);
  if (!match?.groups)
    return (
      <div className="syntax-box">
        <div className="syntax-title">syntax: </div>
        <div className="syntax">{syntax}</div>
      </div>
    );
  let z = match.groups.params
    .split(",")
    .map((x) => x.trim().replace("  ", " "));
  let params = z.map((parm, index) => {
    let a = parm.split(" ");
    console.log(a);
    console.log(`${index} ${z.length}`);
    return (
      <>
        <span className="parameter-type">{a[0] + " "} </span>
        <span className="parameter-name">{a[1]}</span>
        {index + 1 < z.length && <span className="comma">, </span>}
      </>
    );
  });

  return (
    <div className="syntax-box">
      <p className="syntax-title">Syntax: </p>
      <p className="syntax">
        <span className="return-type">{match.groups.returntype} </span>
        <span className="function">{match.groups.function}</span>
        <span className="bracket"> (</span>
        <span className="params"> {params} </span>
        <span className="bracket">)</span>
      </p>
    </div>
  );
}

function Properties({ props }) {
  return (
    <div className="table">
      <div className="row">
        <div className="first">Poperty</div>
        <div className="last">Values</div>
      </div>
      {Object.entries(props).map(([key, value], index) => {
        return (
          <div className="row">
            {value.toString().startsWith("Optional") ? (
              <div className="first">
                <span className="bracket">[</span>
                {key}
                <span className="bracket">] </span>
              </div>
            ) : (
              <div className="first">{key}</div>
            )}
            <div className="last">
              {value.toString().replace("Optional: ", "")}{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Syntax({ syntax }) {
  let regx = RegExp(
    "(?<lhs>(\\w+\\s*\\=)?)\\s*(?<a>\\w+)\\.(?<b>\\w*)(?<lb>\\(?)(?<params>.*)(?<rb>\\))"
  );
  // let regx =
  // RegExp();
  // "((?<lhs>\\w+)\\s*(?<eq>\\=?))(?=(\\s*(?<a>\\w+)\\.(?<b>\\w*)\\.?(?<c>.*)(?<lb>\\(?)(?<params>.*)(?<rb>\\))|$))"

  let match = regx.exec(syntax);
  if (!match?.groups) {
    let f = syntax.split(".");
    return (
      <>
        <span className="function1">{f[0]}</span>
        {f[1] && <span className="function2">.{f[1]}</span>}
      </>
    );
  }
  let { lhs, eq, a, b, c, params, lb, rb } = match.groups;
  console.log(match.groups);

  return (
    <div className="syntax-box">
      <p className="syntax-title">Syntax: </p>
      <p className="syntax">
        {lhs && <span className="lhs">lhs = </span>}
        {/* {eq && <span className="eq-operator">=</span>} */}
        <span className="function1">{a}</span>
        {b && <span className="function2">.{b}</span>}
        {c && <span className="function3">.{c}</span>}
        {lb && <span className="bracket">(</span>}
        {params && <span className="params">{params}</span>}
        {rb && <span className="bracket">)</span>}
      </p>
    </div>
  );
}

// function CodeBlock({ code, langType }) {
//   return (
//     <pre>
//       <code className={"language-" + langType}>{code}</code>
//     </pre>
//   );
// }
function CodeBlock({ code, langType }) {
  return (
    <pre>
      <code>
        <SyntaxHighlighter
          className=".code"
          language={langType}
          style={atomOneDark}
          wrapLines={true}
          customStyle={{
            backgroundColor: "rgb(44, 44, 44)",
            fontSize: "17px",
            fontFamily: "Fira Code",
            padding: "15px 8px",
            margin: "5px 2px",
            borderRadius: "8px",
            scrollbarWidth: "thin",
            msOverflowStyle: "none",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </code>
    </pre>
  );
}

function Output({ output }) {
  return (
    <div className="output-box">
      <div className="output-title">Output: </div>
      <div className="output">{output}</div>
    </div>
  );
}
