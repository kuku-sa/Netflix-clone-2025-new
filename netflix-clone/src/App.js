import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home"; // Import your Home page
import "./index.css";
import "./components/Header/header.css";
import "./components/Footer/footer.css";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      {/* Header */}
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Mobile Hamburger Menu */}
      {menuOpen && (
        <div className="mobile_menu">
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
      )}

      {/* Main Content - replace placeholder with Home */}
      <Home />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
