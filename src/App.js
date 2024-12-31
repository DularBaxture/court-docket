import React from "react";
import ChangeLayoutCourtDocket from "./court-docket";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./styles.css";

const App = () => {
  return (
    <div>
      <ChangeLayoutCourtDocket />
    </div>
  );
};

export default App;
