import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-2">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img
            src="https://seeklogo.com/images/S/Star_Wars-logo-B06952A462-seeklogo.com.png"
            width="60"
            height="60"
          ></img>
        </span>
      </Link>
      <div className="ml-auto">
        <div className="btn-group">
          <button
            type="button"
            class="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Favorites
          </button>
        </div>
      </div>
    </nav>
  );
};
