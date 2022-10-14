import React, { useContext } from "react";
import "../../styles/home.css";
import { Personajes } from "../component/personajes";
import { Planetas } from "../component/planetas";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } =
    useContext(
      Context
    ); /*da un contexto de lo que hay en el archivo flux.js y acceso a los store y a las actions*/
  console.log(store);
  return (
    <>
      <h1>Personajes</h1>
      <div className="d-flex overflow-auto">
        {store.characters.map((element, i) => {
          return <Personajes name={element.name} uid={element.uid}/>;
        })}
      </div>
      <h1>Planetas</h1>
      <div className="d-flex overflow-auto">
        {store.planets.map((element, i) => {
          return <Planetas name={element.name} uid={element.uid}/>;
        })}
      </div>
    </>
  );
};
