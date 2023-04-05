// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css'
import Nums from './components/Nums'
import Screen from './components/Screen'
import Operations from './components/Operations'

export default function Calculator () {
  const [result, setResult] = useState([]);
  return (
      <div id='root' className='boxStyle'>
        <Screen result={result} setResult={setResult} />
        <Operations setResult={setResult} />
        <Nums setResult={setResult} />
      </div>
  );
}
