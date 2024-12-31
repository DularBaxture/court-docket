import React, { useEffect } from "react";
import { layoutAllHeaders } from "./constant";

const Sidebar = ({ selectOptions, handleSelectOptions }) => {
  useEffect(() => {
    console.log("data");
  }, []);
  return (
    <div className="p-2 border border-1">
      {Object.keys(layoutAllHeaders).map((optionName) => {
        return (
          <div className="form-check" key={optionName}>
            <input
              className="form-check-input"
              type="checkbox"
              value={selectOptions[optionName]}
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
