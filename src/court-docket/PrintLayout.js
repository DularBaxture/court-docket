import React, { useState } from "react";
import { mockDocketData, defaultLayoutData } from "./constant";
import DropDrag from "../DragDropGridLayout/DragDrop";

const PrintLayout = () => {
  const [layouts, setLayouts] = useState({ lg: defaultLayoutData });
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="print-layout">
      <div className="print-header" style={{ pageBreakInside: "avoid" }}>
        <button onClick={handlePrint} className="print-button">
          Print Docket
        </button>
      </div>

      {mockDocketData.map((docket, index) => (
        <div
          key={index}
          className="page-container"
          style={{ pageBreakAfter: "always" }}
        >
          <DropDrag data={docket} layouts={layouts} setLayouts={setLayouts} />
        </div>
      ))}
    </div>
  );
};

export default PrintLayout;
