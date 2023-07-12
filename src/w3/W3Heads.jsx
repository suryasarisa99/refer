import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
let data = {};
import { DataContext } from "../../context/DataContext";
export default ({}) => {
  let navigate = useNavigate();
  let { data } = useLocation();
  let { w3Data, setW3Data, setW3Head } = useContext(DataContext);
  return (
    <div>
      {Object.entries(w3Data).map(([key, value]) => {
        return (
          <div
            className="heads w3-items"
            onClick={() => {
              setW3Head(value);
              navigate("/w3subheads", value);
            }}
          >
            {key}{" "}
          </div>
        );
      })}
    </div>
  );
};
