import React, { useState } from 'react';
import './App.css';
import { Button } from './components/Button';

function App() {
  let [count, setCount] = useState(0)
  let [disabledInc, setDisabledInc] = useState(false)  
  let [color, setColor] = useState("#282c34")
  let disabledReset = true

  console.log(count);

  if (count > 0 ) {
    disabledReset = false
  }
  const incrementFoo = () => {    
    if (count < 5) {
      setCount(count + 1)
    }
    if (count === 4) {
      setColor('red');
      setDisabledInc(true)
    }    
  }

  const resetFoo = () => {
    setDisabledInc(false);
    setCount(0);
    setColor('#282c34')
  }

  return (
    <div className="App">
      <div className='main-wrapper'>
        <div className='scoreboard'>
          <span className={`scoreboard__value ${color}`}>{count}</span>
        </div>
        <div className='buttons_wrapper'>
          <Button disabled={disabledInc} name='inc' callBack={incrementFoo} />
          <Button disabled={disabledReset} name='reset' callBack={resetFoo} />
        </div>
      </div>
    </div>
  );
}

export default App;
