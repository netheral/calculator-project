import React, {useState} from 'react';
import './App.css';

function App() {
const [input, setInput] = useState('');
const [operator, setOperator] = useState('');
const [prevNum, setPrevNum] = useState('');
const [currentNum, setCurrentNum] = useState('');

const handleNum = (e) => {
  setInput(input + e.target.value);
  setCurrentNum(parseFloat(currentNum + e.target.value));
  console.log(input, e.target.value)
}

const handleOperator = (e) => {
  setOperator(e.target.value);
  setPrevNum(currentNum);
  setCurrentNum('');
  setInput(input + e.target.value);
}

const handleEqual = () => {
  
  switch(operator) {
    case '+':
      setInput(prevNum + currentNum);
      break;
    case '-':
      setInput(prevNum - currentNum);
      break;
    case '*':
      setInput(prevNum * currentNum);
      break;
    case '/':
      setInput(prevNum / currentNum);
      break;
    default:
      return;
  }
 

}

const handleClear = () => {
  setInput('');
  setOperator('');
  setPrevNum('');
  setCurrentNum('');
}



  return (
    <div className="App">
      <div className='calculator'>
        <h1>Calculator</h1>
        <input className='inputBox' value={input} />
      
        <grid className='grid-container'>        
          <button className='button' value={7} onClick={handleNum}>7</button>
          <button className='button' value='8' onClick={handleNum}>8</button>
          <button className='button' value='9' onClick={handleNum}>9</button>
          <button className='button' value='+' onClick={handleOperator}>+</button>
          <button className='button' value='4' onClick={handleNum}>4</button>
          <button className='button' value='5' onClick={handleNum}>5</button>
          <button className='button' value='6' onClick={handleNum}>6</button>
          <button className='button' value='-' onClick={handleOperator}>-</button>
          <button className='button' value='1' onClick={handleNum}>1</button>
          <button className='button' value='2' onClick={handleNum}>2</button>
          <button className='button' value='3' onClick={handleNum}>3</button>
          <button className='button' value='*' onClick={handleOperator}>*</button>          
          <button className='button' value='.' onClick={handleNum}>.</button>
          <button className='button' value='0' onClick={handleNum}>0</button>
          <button className='button' value='=' onClick={handleEqual}>=</button>
          <button className='button' value='/' onClick={handleOperator}>/</button>
          <button className='button' value='C' onClick={handleClear}>C</button>     
        </grid>
      </div>      
    </div>
  );
}

export default App;
