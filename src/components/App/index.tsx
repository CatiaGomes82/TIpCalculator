import React, { useState } from "react";
import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";
import { DEFAULT_TIP, DEFAULT_SPLIT, DEFAULT_BILL } from "../../settings";
import { getTotalTip, getTotalSplit, getSplitTip, getTotalBill } from "../../utils/calculate";

const App = () => {
  /* initial calculations */
  const storeTotalBill = getTotalBill(DEFAULT_BILL, DEFAULT_TIP);
  const storeTotalTip = getTotalTip(DEFAULT_BILL, DEFAULT_TIP);
  const storeTotalSplit = getTotalSplit(storeTotalBill, DEFAULT_SPLIT);
  const storeSplitTip = getSplitTip(storeTotalTip, DEFAULT_SPLIT);

 /* initial state */
  const [totalBill, setTotalBill] = useState(storeTotalBill);
  const [totalSplit, setTotalSplit] = useState(storeTotalSplit);
  const [totalTip, setTotalTip] = useState(storeTotalTip);
  const [splitTip, setSplitTip] = useState(storeSplitTip);

  /* getters and setters */
  const get = { totalBill, totalSplit, totalTip, splitTip };
  const set = { setTotalBill, setTotalSplit, setTotalTip, setSplitTip };

  return (
    <React.StrictMode>
        <Header get={get} />
        <Body set={set} get={get} />
        <Footer />
    </React.StrictMode>
  );
};

export default App;