/* eslint-disable react/prop-types */

import React from 'react';
import './styles/Operations.css';

export default function Operations ({ setResult }) {
  const handleClick = (value) => {
    setResult(result => [...result, value]);
  };
  const symbols = [
    {
      id: 0,
      value: '+'
    }, {
      id: 1,
      value: '-'
    }, {
      id: 2,
      value: '*'
    }, {
      id: 3,
      value: '/'
    }, {
      id: 4,
      value: '%'
    }, {
      id: 5,
      value: '.'
    }, {
      id: 6,
      value: '('
    }, {
      id: 7,
      value: ')'
    }].map(
    symbol => {
      return <button value={symbol.value} onClick={(e) => handleClick(e.target.value)} draggable='true'
        key={symbol.value} className='buttonNums'>
          {symbol.value}
        </button>
    }
  );
  return (
      <div className='numStyle'>
        {symbols}
      </div>
  );
}
