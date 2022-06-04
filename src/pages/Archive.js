import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import "../App.css";

export default function Archive() {
  return (
    <>
      <h2>Archive</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/Archive">Archive</Link>
        <Link to="/Random">Random</Link>
      </nav>
    </>
  );
}