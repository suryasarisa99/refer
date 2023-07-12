import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
let data = {};
import { DataContext } from "../../context/DataContext";

export default ({}) => {
  let navigate = useNavigate();
  let location = useLocation();
  let { w3Data, setW3Data, w3Head, setW3SubHead, setW3Item } =
    useContext(DataContext);
  //   let { data } = useLocation();
  const [[key, value]] = Object.entries(w3Data);
  console.log(key);

  console.log("Key:", key);
  return (
    <div>
      {w3Head.map((subHeads) => {
        const [[key, value]] = Object.entries(subHeads);
        return (
          <div
            className="subheads w3-items"
            onClick={() => {
              if (Array.isArray(value)) {
                setW3SubHead(value);
                navigate("/w3Items", { value });
              } else {
                setW3Item(value);
                navigate("/w3page", { value });
              }
            }}
          >
            {key}
          </div>
        );
      })}
    </div>
  );
};
