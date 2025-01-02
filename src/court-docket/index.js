import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import DropDrag from "../DragDropGridLayout/DragDrop";
import { defaultLayoutData } from "./constant";
import { useNavigate } from "react-router-dom";

const ChangeLayoutCourtDocket = () => {
  const [layouts, setLayouts] = useState({
    lg: [...defaultLayoutData],
  });
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

  const navigate = useNavigate();

  const handleSetSelectOption = (event) => {
    const { id, checked } = event.target;

    setSelectOptions((prevState) => ({
      ...prevState,
      [id]: checked,
    }));

    setLayouts((prevState) => {
      if (checked) {
        // Add new item to layout when checkbox is checked
        return {
          lg: [
            ...prevState.lg,
            {
              i: id,
              x: (prevState.lg.length * 2) % 12, // Distribute items horizontally
              y: Math.floor(prevState.lg.length / 6), // New row every 6 items
              w: 2,
              h: 1,
            },
          ],
        };
      } else {
        // Remove item from layout when checkbox is unchecked
        return {
          lg: prevState.lg.filter((item) => item.i !== id),
        };
      }
    });
  };

  const handlePrintDocket = () => {
    navigate("/print-docket", { state: { layouts } });
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
    <div className="d-flex position-relative">
      <button
        className="btn btn-primary position-absolute"
        style={{
          top: "10px",
          right: "10px",
          zIndex: 1000,
        }}
        onClick={handlePrintDocket}
      >
        Print Docket
      </button>
      <div className="w-25">
        <Sidebar
          selectOptions={selectOptions}
          handleSelectOptions={handleSetSelectOption}
        />
      </div>
      <div className="w-75 ">
        <div className="page-container">
          <DropDrag
            isDraggable
            isResizable
            layouts={layouts}
            setLayouts={setLayouts}
          />
        </div>
      </div>
    </div>
  );
};

export default ChangeLayoutCourtDocket;
