
import Input from './components/Input';
import Button from './components/Button';
import History from "./components/history";

import { Container, Content, Row } from './styles';
import { useState } from 'react';
const math = require('mathjs')


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [valueHistory, setValueHistory] = useState([])
  const handleOnClear = () => {
    setCurrentNumber('0')
  };

  const handleOnClearLast = () => {
    if(!currentNumber) return
    const arrayNumber = currentNumber.split('')

    arrayNumber.pop()
    setCurrentNumber(arrayNumber.join(''))
  };

  const handleAddNumber = (num) => {
    if(currentNumber === '0' && (num === '+' || num === '-' || num === '.')) return
    if((currentNumber.substring(currentNumber.length - 1) === '+' ||
        currentNumber.substring(currentNumber.length - 1) ==='-' ||
        currentNumber.substring(currentNumber.length - 1) ==='.')
        &&
        (num === '+' || num === '-' || num === '.')
    ) return

    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleEquals = () => {
    const value = math.evaluate(currentNumber).toString()
    const objeto = {
      calculo: currentNumber,
      resultado: value,
    }

    setValueHistory(prevState => [...prevState, objeto])
    setCurrentNumber(value)
  }

  return (
      <>
        <Container>
          <History values={valueHistory}/>
          <Content>
            <Input value={currentNumber}/>
            <Row>
              <Button label="*" onClick={() => handleAddNumber('*')}/>
              <Button label="/" onClick={() => handleAddNumber('/')}/>
              <Button label="c" onClick={handleOnClear}/>
              <Button label="ce" onClick={handleOnClearLast}/>
            </Row>
            <Row>
              <Button label="7" onClick={() => handleAddNumber('7')}/>
              <Button label="8" onClick={() => handleAddNumber('8')}/>
              <Button label="9" onClick={() => handleAddNumber('9')}/>
              <Button label="-" onClick={() => handleAddNumber('-')}/>
            </Row>
            <Row>
              <Button label="4" onClick={() => handleAddNumber('4')}/>
              <Button label="5" onClick={() => handleAddNumber('5')}/>
              <Button label="6" onClick={() => handleAddNumber('6')}/>
              <Button label="+" onClick={() => handleAddNumber('+')}/>
            </Row>
            <Row>
              <Button label="1" onClick={() => handleAddNumber('1')}/>
              <Button label="2" onClick={() => handleAddNumber('2')}/>
              <Button label="3" onClick={() => handleAddNumber('3')}/>
              <Button label="=" onClick={handleEquals}/>
            </Row>
          </Content>
        </Container>
      </>
  );
}

export default App;
