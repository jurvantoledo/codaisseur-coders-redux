import React from "react";
import { Link } from "react-router-dom";

export default function Toolbar() {
  return (
    <div>
      <Link to="/login">
        <button>Not logged in</button>
      </Link>
      <button>Log out</button>
    </div>
  );
}
