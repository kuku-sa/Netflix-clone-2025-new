import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
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

      {/* Main Content */}
      <main style={{ minHeight: "70vh", padding: "50px", textAlign: "center" }}>
        <h1>Welcome to Netflix Clone</h1>
        <p>This is your main content area. Add movies, banners, and carousels here.</p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
