import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash } from '@fortawesome/free-solid-svg-icons'




function App() {
  const [count, setCount] = useState(0);
  const [tajbeehName, setTajbeehName] = useState('');
  const [tajbeehNumber, setTajbeehNumber] = useState('');
  // const [filled, setFilled] = useState(false);
  const [histories, setHistories] = useState([]);
  const handleCount = () => {
    setCount(count + 1);

  }
  const hanldeFormSubmit = (event) => {
    event.prevent.default();
  }
  const handleTajbeehName = (event) => {
    const inputName = event.target.value;
    setTajbeehName(inputName);

  }
  const handleTajbeehNumber = (event) => {
    const inputNumber = event.target.value;
    setTajbeehNumber(inputNumber);
  }

  const handleReset = () => {
    setCount(0);
  }
  const handleSave = () => {
    const record = document.getElementById('record').innerText;
    setHistories([...histories, record]);
    document.getElementById('record-container').style.visibility = 'hidden';
    
  }
  console.log(histories)
  return (
    <div className="App">
      <h2 className='my-5'> <span className='text-success'>Tajbeeh</span> Reader </h2>
      <Form onSubmit={hanldeFormSubmit} className='w-50 mx-auto'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onBlur={handleTajbeehName} type="text" placeholder="Tasbeeh Name  " required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control onChange={handleTajbeehNumber} type="number" placeholder="How Many time" required />
        </Form.Group>
        <div className='my-5'>
          {
            parseInt(tajbeehNumber) === count && (
              <div id='record-container' className='d-flex align-items-center justify-content-center'>
                <p id='record' className='record'>You did <span className='text-success fw-bold'>{tajbeehName}</span> {tajbeehNumber} times </p>
                <Button onClick={handleSave} className="mx-2 record" variant='success' size='sm'>Save</Button>
              </div>
            )
          }
          <h2> {count} </h2>
          <Button onClick={handleCount}
           disabled={(parseInt(tajbeehNumber) === count) || tajbeehNumber === ''}
          className='mx-3'
          variant="success" >Count</Button>
          <Button  onClick={handleReset} variant="success" > Reset </Button>
        </div>

      </Form>
      {/* History of tajbeeh reading */}
      <div>
          {
            histories.map(history => <div className='history-container'> 
              <p className='history'> {history} </p>
              <FontAwesomeIcon className='mx-5' icon={faTrash}></FontAwesomeIcon>
            </div>)
          }
      </div>

    </div>
  );
}

export default App;
