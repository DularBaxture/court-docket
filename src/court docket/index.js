import React, { useState } from "react";
import ReactGridLayout from "react-grid-layout";

const CourtDocketCustomization = () => {
  const [layout, setLayout] = useState(null);
  return (
    <div>
      <ReactGridLayout
        className="layout"
        layouts={layout}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        <div key="1">1</div>
        <div key="2">2</div>
        <div key="3">3</div>
      </ReactGridLayout>
    </div>
  );
};

export default CourtDocketCustomization;
