import React, { useRef } from 'react';
import { getTotalTip, getTotalSplit, getSplitTip } from '../../utils/calculate';
import { DEFAULT_SPLIT, DEFAULT_TIP  } from '../../settings';
import './index.css';

interface BodyProps {
  set: any,
  get: any
}

const Body: React.FC<BodyProps> = ({ set, get }) => {
  const peopleSplittingBill = useRef(DEFAULT_SPLIT)
  const tipPercentage = useRef(DEFAULT_TIP)

  const setTotalBill = (value: number) => {
    set.setTotalBill(value);
  };

  const setTotalTip = (value: number) => {
    const totalTip = getTotalTip(value, tipPercentage.current);
    set.setTotalTip(totalTip);
  };

  const setSplit = (value: number) => {
    const totalSplit = getTotalSplit(value, peopleSplittingBill.current);
    const splitTip = getSplitTip(totalSplit, tipPercentage.current);
    set.setSplitTip(splitTip);
    set.setTotalSplit(totalSplit);
  };

  const handleTotalBill = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const totalBillNumber = Number(value);
    
    setTotalBill(totalBillNumber);
    setTotalTip(totalBillNumber);
    setSplit(totalBillNumber);
  };

  const handleSplit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    const numberOfPeople = Number(value);
    peopleSplittingBill.current = numberOfPeople;

    setSplit(get.totalBill);
  };

  const handleTip = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    const currentPercentageTip = Number(value);
    tipPercentage.current = currentPercentageTip;

    setSplit(get.totalBill);
    setTotalTip(get.totalBill);
  };

  return (
    <div className='body'>
      <form className='wrapper'>
        <div className='body__field'>
          <label className='body__label' htmlFor="bill">Bill</label>
          <input className='body__input' onChange={handleTotalBill} value={get.totalBill} id="bill" type="number" name="total" min="1" />
        </div>
        <div className='body__field'>
          <label className='body__label' htmlFor="tip">Tip</label>
          <input className='body__input' onChange={handleTip} value={tipPercentage.current} id="tip" type="number" name="tip" min="1" />
        </div>
        <div className='body__field'>
          <label className='body__label' htmlFor="split">Split</label>
          <input className='body__input' onChange={handleSplit} value={peopleSplittingBill.current} id="split" type="number" name="split" min="1" />
        </div>
      </form>
    </div>
  );
}

export default Body;