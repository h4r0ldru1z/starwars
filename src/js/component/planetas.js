import React from "react";
import { Link } from "react-router-dom";

export const Planetas = ({ uid, name }) => {
  return (
    <div className="col-4">
      <div className="card h-100">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
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
            <Link to={`/planet/${uid}`}>
              <button type="button" className="btn btn-primary">
                Ver Más!
              </button>
            </Link>
          </div>
          <div className="btn-group me-2" role="group" aria-label="Third group">
            <button type="button" className="btn btn-outline-warning">
              <i className="fa fa-heart text-warning" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
