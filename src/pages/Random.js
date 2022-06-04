import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import "../App.css";

export default function Random() {
  return (
    <>
      <h2>Random</h2>

      <nav>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/Archive">
          Archive
        </Link>
        <Link className="link" to="/Random">
          Random
        </Link>
      </nav>
    </>
  );
}
