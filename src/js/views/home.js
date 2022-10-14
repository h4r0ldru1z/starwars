import React from "react";
import "../../styles/home.css";
import { Personajes } from "../component/personajes";
import { Planetas } from "../component/planetas";

export const Home = () => (
  <>
    <h1>Personajes</h1>
    <div className="d-flex overflow-auto">
      <Personajes />
      <Personajes />
      <Personajes />
      <Personajes />
      <Personajes />
      <Personajes />
      <Personajes />
      <Personajes />
    </div>
    <h1>Planetas</h1>
    <div className="d-flex overflow-auto">
      <Planetas />
      <Planetas />
      <Planetas />
      <Planetas />
      <Planetas />
    </div>
  </>
);
