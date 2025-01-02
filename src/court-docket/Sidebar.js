import React from "react";
import { layoutAllHeaders } from "./constant";

const Sidebar = ({ selectOptions, handleSelectOptions }) => {
  return (
    <div className="p-2 border border-1 vh-100">
      {Object.keys(layoutAllHeaders).map((optionName) => {
        return (
          <div
            className="form-check py-2 border-bottom border-1"
            key={optionName}
          >
            <input
              className="form-check-input"
              type="checkbox"
              checked={selectOptions[optionName]}
              id={optionName}
              onChange={handleSelectOptions}
            />
            <label className="form-check-label" htmlFor={optionName}>
              {layoutAllHeaders[optionName]}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
