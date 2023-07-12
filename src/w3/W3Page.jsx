import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  dracula,
  docco,
  colorBrewer,
  a11yDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

export default () => {
  let { w3Data, w3Item } = useContext(DataContext);
  console.log(w3Item);
  return (
    <div className="w3-page">
      {Object.entries(w3Item).map(([key, data]) => {
        let className = key.toLowerCase().split(" ").join("-").replace(":", "");
        return (
          <div className={className + " " + "block"}>
            <div className="subtitle">{key}</div>
            <CodeBlock code={data} className={"data"} />
          </div>
        );
      })}
    </div>
  );
};

function CodeBlock({ code, ...rest }) {
  return (
    // <pre>
    // <code>
    <div dangerouslySetInnerHTML={{ __html: code }} {...rest} />
    // </code>
    // </pre>
  );
}

// export default () => {
//   let { w3Data } = useContext(DataContext);
//   console.log(w3Data);
//   return (
//     <div className="w3-page">
//       <div className="w3-title">{w3Data.title}</div>
//       <CodeBlock code={w3Data.examples[0]} />
//       <div className="definition w3-subtitle">
//         <h2>Definition and Usage</h2>
//         <div
//           dangerouslySetInnerHTML={{
//             __html: w3Data["Definition and Usage"],
//           }}
//         ></div>
//       </div>

//       <h2 className="w3-subtitle">More Examples: </h2>
//       {w3Data.examples.map((example) => {
//         return <CodeBlock code={example} langType={"html"} />;
//       })}
//       {/* {w3Data.Attributes && (
//         <data className="attributes">
//           <h2>Attributes</h2>
//           <div
//             dangerouslySetInnerHTML={{
//               __html: w3Data["Attributes"],
//             }}
//           ></div>
//         </data>
//       )} */}
//     </div>
//   );
// };
