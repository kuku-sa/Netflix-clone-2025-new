// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./components/Category/CategoryPage.jsx";
// ... other imports

export default function App() {
  return (
    <Routes>
      {/* other routes */}
      <Route path="/category/:name" element={<CategoryPage />} /> 
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
}