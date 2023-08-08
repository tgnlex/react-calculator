// import libraries
import React, { useReducer } from 'react';

// import components 
import DigitButton from './components/DigitButton'
import OperationButton from './components/OperationButton'
// import javascript files
import { ACTIONS } from './scripts/GlobalVar.js'
import { Reducer } from './scripts/Reducer.js'
import { formatOperand } from './scripts/FormatOperand.js'
import { evaluate } from './scripts/Evaluate.js'
// import stylesheets
import './styles/App.css'


function App() {

  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(
    Reducer,
    {}
  )
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{formatOperand(previousOperand)} {operation}</div>
        <div className="current-operand">{formatOperand(currentOperand)}</div>
      </div>
      <button 
        className="btn-span-two"
        onClick={() => dispatch({ type: ACTIONS.CLEAR})}
      >
        CLR
      </button>
      <button 
      className="btn"
      onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT})}
      >
        DEL
      </button>
      <OperationButton operation='÷' dispatch={dispatch} />
      <DigitButton digit='1' dispatch={dispatch} />
      <DigitButton digit='2' dispatch={dispatch} />
      <DigitButton digit='3' dispatch={dispatch} />
      <OperationButton operation='*' dispatch={dispatch} />
      <DigitButton digit='4' dispatch={dispatch} />
      <DigitButton digit='5' dispatch={dispatch} />
      <DigitButton digit='6' dispatch={dispatch} />
      <OperationButton operation='+' dispatch={dispatch} />
      <DigitButton digit='7' dispatch={dispatch} />
      <DigitButton digit='8' dispatch={dispatch} />
      <DigitButton digit='9' dispatch={dispatch} />
      <OperationButton operation='-' dispatch={dispatch} />
      <DigitButton digit='9' dispatch={dispatch} />
      <DigitButton digit='0' dispatch={dispatch} />
      <button 
        className="btn-span-two"
        onClick={() => dispatch({ type: ACTIONS.EVALUATE})}
      >
        =
      </button>
    </div>
  );
}

export default App;
