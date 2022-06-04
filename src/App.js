import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Random from "./pages/Random";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Archive" element={<Archive />} />
        <Route path="Random" element={<Random />} />
      </Routes>
      ;
    </>
  );
}

export default App;
