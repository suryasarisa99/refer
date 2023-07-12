import Java from "./java/Java";
import SearchPage from "./SearchPage";
import { FaSearch } from "react-icons/fa";
import Methods from "./Methods";
import { useNavigate, Routes, Route } from "react-router-dom";
import React from "./react/React";
import Python from "./python/Python";
import Kotlin from "./kotlin/Kotlin";
import Js from "./js/Js";
import Home from "./Home";
import Html from "./html/Html";
import W3 from "./w3/W3";
import W3Items from "./w3/W3Items";
import W3Page from "./w3/W3Page";
import W3SubHeads from "./w3/W3SubHeads";
import W3Heads from "./w3/W3Heads";
export default function App() {
  let navigation = useNavigate();
  return (
    <div className="app">
      {/* <div className="search-bar" onClick={() => navigation("/search-page")}>
        <div className="search-icon" onClick={() => navigation("/search-page")}>
          <FaSearch />
        </div>
      </div> */}
      <Routes>
        {/* <Route path="/" element={<SearchPage />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/w3" element={<W3 />} />
        <Route path="/w3items" element={<W3Items />} />
        <Route path="/w3heads" element={<W3Heads />} />
        <Route path="/w3subHeads" element={<W3SubHeads />} />
        <Route path="/w3page" element={<W3Page />} />

        <Route path="/java" element={<Java />} />
        <Route path="/Kotlin" element={<Kotlin />} />
        <Route path="/Js" element={<Js />} />
        <Route path="/Python" element={<Python />} />
        <Route path="/React" element={<React />} />

        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/methods" element={<Methods />} />
      </Routes>
    </div>
  );
}
