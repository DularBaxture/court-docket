import { useState, useEffect } from "react";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
import { layoutAllHeaders } from "../court-docket/constant";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const DropDrag = ({
  isDraggable = false,
  isResizable = false,
  layouts = {},
  setLayouts,
  data = {},
}) => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState("lg");
  const [compactType, setCompactType] = useState("vertical");
  const [mounted, setMounted] = useState(false);
  const [toolbox, setToolbox] = useState({
    lg: [],
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const onBreakpointChange = (breakpoint) => {
    setCurrentBreakpoint(breakpoint);
    setToolbox({
      ...toolbox,
      [breakpoint]: toolbox[breakpoint] || toolbox[currentBreakpoint] || [],
    });
  };

  const onCompactTypeChange = () => {
    let oldCompactType = "";

    const compactType =
      oldCompactType === "horizontal"
        ? "vertical"
        : oldCompactType === "vertical"
        ? null
        : "horizontal";
    setCompactType(compactType);
  };

  const onLayoutChange = (layout, layouts) => {
    setLayouts({ ...layouts });
  };

  // const onDrop = (layout: any, layoutItem: any, _ev: any) => {
  //   alert(
  //     `Element parameters:\n${JSON.stringify(
  //       layoutItem,
  //       ["x", "y", "w", "h"],
  //       2
  //     )}`
  //   );
  // };

  const generateDOM = () => {
    return _.map(layouts.lg, function (l) {
      return (
        <div key={l.i} className="bg-white border border-1 px-2 rounded">
          <div className="grid-item__header">
            <div className="py-2 h5 fw-medium text-black-50">
              {layoutAllHeaders[l.i]}
            </div>
          </div>
          <div className="h5 pb-2">{data[l.i] ? data[l.i] : "-No Data-"}</div>
        </div>
      );
    });
  };

  return (
    <>
      {/* <div
        className="droppable-element"
        draggable
        unselectable="on"
        onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
      >
        Droppable Element (Drag me!)
      </div> */}
      <ResponsiveReactGridLayout
        // {...props}
        style={{ background: "#f0f0f0" }}
        layouts={layouts}
        measureBeforeMount={false}
        useCSSTransforms={mounted}
        compactType={compactType}
        preventCollision={!compactType}
        onLayoutChange={onLayoutChange}
        onBreakpointChange={onBreakpointChange}
        draggableHandle=".grid-item__header"
        isResizable={isResizable}
        isDraggable={isDraggable}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      >
        {generateDOM()}
      </ResponsiveReactGridLayout>
    </>
  );
};

export default DropDrag;

// DropDrag.defaultProps = {
//   className: "layout",
//   rowHeight: 30,
//   onLayoutChange: (layout: any, layouts: any) => {},
//   cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
//   breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
//   containerPadding: [0, 0],
// };
