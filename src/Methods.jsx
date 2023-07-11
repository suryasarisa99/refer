import { DataContext } from "../context/DataContext";
import Acc from "./components/Acc";
import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default ({ searchResults }) => {
  let [openedAcc, setOpenedAcc] = useState(-1);
  let { methods } = useContext(DataContext);
  let [query, setQuery] = useState("");

  let navigation = useNavigate();
  return (
    <div>
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          className="sb"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {/* {!searchResults && (
        <div>
          <div
            className="search-bar"
            onClick={() => navigation("/search-page")}
          >
            <div
              className="search-icon"
              onClick={() => navigation("/search-page")}
            >
              <FaSearch />
            </div>
          </div>
        </div>
      )} */}

      {query.length > 0
        ? methods
            .filter((method) => {
              return method.name.toLowerCase().includes(query.toLowerCase());
            })
            .map((item, index) => {
              return (
                <Acc
                  data={item}
                  key={index}
                  index={index}
                  state={openedAcc}
                  onClick={(index) => {
                    if (index == openedAcc) setOpenedAcc(-1);
                    else setOpenedAcc(index);
                  }}
                />
              );
            })
        : methods.map((item, index) => {
            return (
              <Acc
                data={item}
                key={index}
                index={index}
                state={openedAcc}
                onClick={(index) => {
                  if (index == openedAcc) setOpenedAcc(-1);
                  else setOpenedAcc(index);
                }}
              />
            );
          })}
    </div>
  );
};
