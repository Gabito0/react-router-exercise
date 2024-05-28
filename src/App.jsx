import { useState } from "react";
import VendingMachine from "./VendingMachine";
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
