import React from "react";
import { Routes, Route, Link } from "react-router-dom"; // Added Link
import ToggleForm from "./ToggleForm";

export default function Routing() {
  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <Link style={{ marginRight: "10px" }} to="/">
          Home
        </Link>
        <Link to="/toggle-form">Open Toggle Form</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<div>Welcome! Click a link above.</div>} />
        <Route path="/toggle-form" element={<ToggleForm />} />
      </Routes>
    </div>
  );
}
