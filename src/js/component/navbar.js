import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const {store, actions}= useContext(Context);
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
      <div className="dropdown me-2 pe-5">
        <div className="dropdown pe-2">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites{" "}
            <span className="bg-secondary p-1">{store.favoritos.length}</span>
          </button>
          <ul className="dropdown-menu">
            {store.favoritos.length
              ? store.favoritos.map((element, i) => {
                  return (
                    <li>
                      {element.name}
                      <i
                        className="fa-solid fa-trash ps-3"
                        style={{ border: 0, cursor: "pointer" }}
                        onClick={() => {
                          actions.delFavorito(i);
                        }}
                      ></i>
                    </li>
                  );
                })
              : "(Empty)"}
          </ul>
        </div>
      </div>
    </nav>
  );
};
