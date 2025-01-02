import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChangeLayoutCourtDocket from "./court-docket";
import PrintLayout from "./court-docket/PrintLayout";

import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ChangeLayoutCourtDocket />} />
          <Route path="/print-docket" element={<PrintLayout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
