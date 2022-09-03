import React, { useRef } from "react";
import { getTotalTip, getTotalSplit, getSplitTip, getTotalBill } from "../../utils/calculate";
import { DEFAULT_BILL, DEFAULT_SPLIT, DEFAULT_TIP  } from "../../settings";
import "./index.css";

interface BodyProps {
  set: any,
  get: any
}

const Body: React.FC<BodyProps> = ({ set, get }) => {
  const peopleSplittingBill = useRef(DEFAULT_SPLIT);
  const tipPercentage = useRef(DEFAULT_TIP);
  const currentBill = useRef(DEFAULT_BILL);

  const setTotalBill = (value: number) => {
    const totalBill = getTotalBill(value, tipPercentage.current);
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

    setTotalTip(currentBillNumber);
    setSplit(totalBill, totalTip);
  };

  const handleSplit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const totalTip = setTotalTip(get.totalBill);

    const numberOfPeople = Number(value);
    peopleSplittingBill.current = numberOfPeople;

    setSplit(get.totalBill, totalTip);
  };

  const handleTip = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const totalBill = setTotalBill(currentBill.current);
    const totalTip = setTotalTip(currentBill.current);
    const currentPercentageTip = Number(value);

    tipPercentage.current = currentPercentageTip;

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
          <input className="body__input" onChange={handleTip} value={tipPercentage.current} id="tip" type="number" name="tip" min="1" />
        </div>
        <div className="body__field">
          <label className="body__label" htmlFor="split">Split</label>
          <input className="body__input" onChange={handleSplit} value={peopleSplittingBill.current} id="split" type="number" name="split" min="1" />
        </div>
      </form>
    </div>
  );
}

export default Body;