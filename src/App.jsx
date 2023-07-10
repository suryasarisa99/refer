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
