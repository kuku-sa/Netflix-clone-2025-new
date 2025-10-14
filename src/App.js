import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter basename="/Netflix-clone-2025-new">
      <div className="App">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
      </div>
    </BrowserRouter>
  );
};

export default App;
