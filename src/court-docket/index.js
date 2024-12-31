import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import DropDrag from "../DragDropGridLayout/DragDrop";
import { defaultLayoutData } from "./constant";

const ChangeLayoutCourtDocket = () => {
  const [layouts, setLayouts] = useState({
    lg: [...defaultLayoutData],
  });
  // const [layouts, setLayouts] = useState({});
  const [selectOptions, setSelectOptions] = useState({
    orderNo: false,
    startTime: false,
    causeNo: false,
    caseAge: false,
    offense: false,
    offenseDate: false,
    style: false,
    defendant: false,
    filingDate: false,
    attorney: false,
    bondsmen: false,
    hearingType: false,
    notes: false,
    otherParties: false,
    bondAmount: false,
    defendantAddress: false,
    dateOfBirth: false,
    location: false,
    bondType: false,
    defendantAttorney: false,
    plaintiffAttorney: false,
    courtAppointedAttorney: false,
  });

  const handleSetSelectOption = (event) => {
    console.log("event", event);
  };

  useEffect(() => {
    setSelectOptions((prevState) => {
      const newState = { ...prevState };
      defaultLayoutData.forEach((data) => {
        newState[data.i] = true;
      });
      return newState;
    });
  }, []);

  return (
    <div className="d-flex">
      <div className="w-25">
        <Sidebar
          selectOptions={selectOptions}
          handleSelectOptions={handleSetSelectOption}
        />
      </div>
      <div className="w-75">
        <DropDrag isDraggable layouts={layouts} setLayouts={setLayouts} />
      </div>
    </div>
  );
};

export default ChangeLayoutCourtDocket;
