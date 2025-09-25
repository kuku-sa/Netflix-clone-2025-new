import React, { useState } from "react";
import Header from "./components/Header/Header";
import Home from "../src/pages/Home/Home";
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
    </div>
  );
};

export default App;
