const docketId = 1;
const courtDocketSelectData = [
  {
    orderNumber: 1,
    label: "Order No",
    name: "orderNo",
    docketId,
  },
  { orderNumber: 2, label: "Case No", name: "causeNo", docketId },
  {
    orderNumber: 3,
    label: "Offense / Case Type",
    name: "offense",
    docketId,
  },
  {
    orderNumber: 4,
    label: "Offense Date",
    name: "offenseDate",
    docketId,
  },
  { orderNumber: 5, label: "Style", name: "style", docketId },
  { orderNumber: 6, label: "Defendant", name: "defendant", docketId },
  {
    orderNumber: 7,
    label: "Filing Date",
    name: "filingDate",
    docketId,
  },
  { orderNumber: 8, label: "Case Age", name: "caseAge", docketId },
  { orderNumber: 9, label: "Bondsmen", name: "bondsmen", docketId },
  { orderNumber: 10, label: "Attorney", name: "attorney", docketId },
  {
    orderNumber: 11,
    label: "Hearing Type",
    name: "hearingType",
    docketId,
  },

  { orderNumber: 12, label: "Notes", name: "notes", docketId },

  {
    orderNumber: 13,
    label: "Other Parties",
    name: "otherParties",
    docketId,
  },

  {
    orderNumber: 14,
    label: "Bond Amount",
    name: "bondAmount",
    docketId,
  },
];

const initialLayout = [
  { i: "1", x: 0, y: 0, w: 6, h: 3, name: "orderNo" },
  { i: "2", x: 6, y: 0, w: 3, h: 2, name: "offense" },
  { i: "3", x: 9, y: 0, w: 6, h: 1, name: "offenseDate" },
];
