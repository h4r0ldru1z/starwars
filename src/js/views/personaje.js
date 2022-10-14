import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Personaje = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    if (params.theid) actions.get_character(params.theid);
  }, [params.theid]);
  return (
    <div className="jumbotron">
      <h1>Hola Personaje
        {store.character?.name} 
      </h1>
    </div>
  );
};

Personaje.propTypes = {
  match: PropTypes.object,
};

/* favoritos
fetch planeta individual y poner eso decente */