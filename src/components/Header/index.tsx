import React from 'react';
import { formatCurrency } from '../../utils/format';
import './index.css';

interface HeaderProps {
  get: any,
}

const Header: React.FC<HeaderProps> = ({ get }) => {
  const totalTip = formatCurrency(get.totalTip);
  const splitTip = formatCurrency(get.splitTip);
  const totalBill = formatCurrency(get.totalBill);
  const totalSplit = formatCurrency(get.totalSplit);

  return (
    <header className='header'>
      <div className='wrapper header__wrapper'>
        {totalTip && (
          <div className='header__amount'>
            <span className='header__label'>Total tip</span>
            {totalTip}
          </div>
        )}
        {splitTip && (
          <div className='header__amount'>
            <span className='header__label'>Split Tip</span>
            {splitTip}
          </div>
        )}
        {totalBill && (
          <div className='header__amount'>
            <span className='header__label'>Total Bill</span>
            {totalBill}
          </div>
        )}
        {totalSplit && (
          <div className='header__amount'>
            <span className='header__label'>Split Totals</span>
            {totalSplit}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;