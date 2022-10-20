import React, { useEffect, useContext } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Personajes = ({ name, uid }) => {
  return (
    <div className="col-4">
      <div className="card h-100">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
          className="card-img-top"
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">.</p>
        </div>
        <div
          className="btn-toolbar justify-content-between"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div className="btn-group me-2" role="group" aria-label="First group">
            <Link to={`/character/${uid}`}>
              <button type="button" className="btn btn-primary">
                Ver Más!
              </button>
            </Link>
          </div>
          <div className="btn-group me-2" role="group" aria-label="Third group">
            <button type="button" className="btn btn-outline-warning" onClick={()=> actions.addFavorito({id:id, name:name})}>
              <i className="fa fa-heart text-warning" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
