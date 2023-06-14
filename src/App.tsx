import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button';

function App() {
  let [count, setCount] = useState(0)
  let [disabledInc, setDisabledInc] = useState(false)
  let [err, setErr] = useState(false)

  const incrementFoo = () => {

    if (count <= 5) {
      setCount(count + 1)

    }
    if (count === 4) {
      setErr(true);
      setDisabledInc(true)
    }
  }

  const resetFoo = () => {
    setDisabledInc(false);
    setCount(0);
    setErr(false)
  }

  return (
    <div className="App">
      <div className='main-wrapper'>
        <div className='scoreboard'>
          <span className={err ? 'scoreboard__value  red' : `scoreboard__value`}>{count}</span>
        </div>
        <div className='buttons_wrapper'>
          <Button disabled={count == 5} name='inc' callBack={incrementFoo} />
          <Button disabled={count == 0} name='reset' callBack={resetFoo} />
        </div>
      </div>
    </div>
  );
}

export default App;
