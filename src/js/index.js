//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
//ReactDOM.createRoot(document.getElementById("app").render)
   // <React.StrictMode>
    //    <BrowserRouter>
      //  <Layout/>
      //  </BrowserRouter>
 //   </React.StrictMode>
