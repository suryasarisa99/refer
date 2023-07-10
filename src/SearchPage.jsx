import { FaSearch } from "react-icons/fa";
import { useEffect, useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import Item from "./components/Item";
import Acc from "./components/Acc";
// import open
import Methods from "./Methods";
export default () => {
  let { methods, data } = useContext(DataContext);
  // useEffect(() => {
  //   document.querySelector(".sb").focus();
  // }, []);
  let [query, setQuery] = useState("");
  let [openedAcc, setOpenedAcc] = useState(-1);

  let counter = 0;
  return (
    <div className="search-page">
      {/* <input></input> */}
      <SearchBar query={query} setQuery={setQuery} />
      <div>
        {data.map((lang, i) => {
          return lang.data.map((group, j) => {
            let langType = lang.type;
            return group.methods.map((method, k) => {
              if (method.name.toLowerCase().startsWith(query.toLowerCase()))
                return (
                  <Acc
                    data={method}
                    lang={lang.type}
                    key={+"-" + j + "-" + k}
                    // index={i + "-" + j + "-" + k}
                    index={counter++}
                    group={group.type}
                    state={openedAcc}
                    onClick={(index) => {
                      if (index == openedAcc) setOpenedAcc(-1);
                      else setOpenedAcc(index);
                    }}
                  />
                );
            });
          });
        })}
      </div>
    </div>
  );
};

function SearchBar({ query, setQuery }) {
  return (
    <div className="vcvc">
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          className="sb"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}
