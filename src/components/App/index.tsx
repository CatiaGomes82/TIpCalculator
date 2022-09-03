import React, { useState } from 'react';
import Header from '../Header';
import Body from '../Body';
import Footer from '../Footer';
import { DEFAULT_TIP, DEFAULT_SPLIT } from '../../settings';

const App = () => {
  const [totalBill, setTotalBill] = useState(100);
  const [totalSplit, setTotalSplit] = useState(totalBill / DEFAULT_SPLIT);
  const [totalTip, setTotalTip] = useState(totalBill * (DEFAULT_TIP / 100));
  const [splitTip, setSplitTip] = useState(totalBill / DEFAULT_SPLIT * (DEFAULT_TIP / 100));
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