import React, { useRef } from "react";
import { getTotalTip, getTotalSplit, getSplitTip, getTotalBill } from "../../utils/calculate";
import { DEFAULT_BILL, DEFAULT_SPLIT, DEFAULT_TIP } from "../../settings";
import "./index.css";

interface BodyProps {
  set: any,
  get: any
}

const Body: React.FC<BodyProps> = ({ set, get }) => {
  const peopleSplittingBill = useRef(DEFAULT_SPLIT);
  const tipPercentage = useRef(DEFAULT_TIP);
  const currentBill = useRef(DEFAULT_BILL);

  const setTotalBill = (currentBill: number) => {
    const totalBill = getTotalBill(currentBill, tipPercentage.current);
    set.setTotalBill(totalBill);
    return totalBill;
  };

  const setTotalTip = (currentBill: number) => {
    const totalTip = getTotalTip(currentBill, tipPercentage.current);
    set.setTotalTip(totalTip);

    return totalTip;
  };

  const setSplit = (totalBill: number, totalTip: number) => {
    const totalSplit = getTotalSplit(totalBill, peopleSplittingBill.current);
    const splitTip = getSplitTip(totalTip, peopleSplittingBill.current);
    set.setSplitTip(splitTip);
    set.setTotalSplit(totalSplit);
  };

  const handleTotalBill = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const currentBillNumber = Number(value);
    const totalTip = setTotalTip(currentBillNumber);
    const totalBill = setTotalBill(currentBillNumber);

    currentBill.current = currentBillNumber;

    setSplit(totalBill, totalTip);
  };

  const handleSplit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const totalTip = setTotalTip(get.totalBill);

    peopleSplittingBill.current = Number(value);

    setSplit(get.totalBill, totalTip);
  };

  const handleTip = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    tipPercentage.current = Number(value);

    const totalBill = setTotalBill(currentBill.current);
    const totalTip = setTotalTip(currentBill.current);

    setSplit(totalBill, totalTip);
  };

  return (
    <div className="body">
      <form className="wrapper">
        <div className="body__field">
          <label className="body__label" htmlFor="bill">Bill</label>
          <input className="body__input" onChange={handleTotalBill} defaultValue={DEFAULT_BILL} id="bill" type="number" name="total" min="1" />
        </div>
        <div className="body__field">
          <label className="body__label" htmlFor="tip">Tip</label>
          <input className="body__input" onChange={handleTip} defaultValue={tipPercentage.current} id="tip" type="number" name="tip" min="1" />
        </div>
        <div className="body__field">
          <label className="body__label" htmlFor="split">Split</label>
          <input className="body__input" onChange={handleSplit} defaultValue={peopleSplittingBill.current} id="split" type="number" name="split" min="1" />
        </div>
      </form>
    </div>
  );
}

export default Body;