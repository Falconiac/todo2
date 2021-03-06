import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import "../App.css";

export default function Home() {
  return (
    <>
      <h2>To-Do-App</h2>

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
