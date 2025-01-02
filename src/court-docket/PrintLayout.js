import React, { useState } from "react";
import { mockDocketData, defaultLayoutData } from "./constant";
import DropDrag from "../DragDropGridLayout/DragDrop";
import { useLocation } from "react-router-dom";

const PrintLayout = () => {
  const location = useLocation();
  const [layouts, setLayouts] = useState(
    location.state?.layouts || { lg: defaultLayoutData }
  );
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="print-layout">
      <div className="print-header" style={{ pageBreakInside: "avoid" }}>
        <button
          onClick={handlePrint}
          className="btn btn-secondary m-4 print-button"
        >
          Print Docket
        </button>
      </div>

      {mockDocketData.map((docket, index) => (
        <div
          key={index}
          className="page-container mb-3"
          style={{ pageBreakAfter: "always" }}
        >
          <DropDrag data={docket} layouts={layouts} setLayouts={setLayouts} />
        </div>
      ))}
    </div>
  );
};

export default PrintLayout;
