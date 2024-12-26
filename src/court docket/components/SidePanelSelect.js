import React from "react";

const SidePanelSelect = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        return (
          <div>
            <div>{item.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SidePanelSelect;
