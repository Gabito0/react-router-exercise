import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from "./Sardines";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/sardines" element={<Sardines />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
