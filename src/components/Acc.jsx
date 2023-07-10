import "./acc.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { motion, animate, AnimatePresence } from "framer-motion";
import { AiFillCaretDown } from "react-icons/ai";
import {
  dracula,
  docco,
  colorBrewer,
  a11yDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";
export default ({ data, state, index, onClick, lang, group }) => {
  return (
    <div className="acc">
      <div className="acc-head" onClick={() => onClick(index)}>
        {lang && (
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
              <Syntax syntax={data.syntax} />
              <p className="keypoints">{data.keypoints || data.description}</p>
              {data.examples.map((example, index) => {
                if (typeof example === "string")
                  return (
                    <div>
                      <code>
                        <SyntaxHighlighter
                          className=".code"
                          language="javascript"
                          style={dracula}
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
                          {example}
                        </SyntaxHighlighter>
                      </code>
                      {data?.output?.length >= index - 1 &&
                        data?.output[index] && (
                          <div className="output-box">
                            <div className="output-title">Output: </div>
                            <div className="output">{data.output[index]}</div>
                          </div>
                        )}
                    </div>
                  );
                else {
                  return (
                    <div>
                      <code>
                        <SyntaxHighlighter
                          className=".code"
                          language="javascript"
                          style={dracula}
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
                          {example.example}
                        </SyntaxHighlighter>
                      </code>
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

function Syntax({ syntax }) {
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
