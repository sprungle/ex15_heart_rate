import './App.css';
import {useState} from 'react';

function App() {
  const [age, setAge] = useState(0);
  const [upperLimit, setUpperLimit] = useState(0);    
  const [lowerLimit, setLowerLimit] = useState(0);    

  function calculate(){
    const resultUpperLimit = (220 - age) * 0.85;
    const resultLowerLimit = (220 - age) * 0.65;
    setLowerLimit (resultLowerLimit);
    setUpperLimit (resultUpperLimit);
  }



  return (
    <div>
    <h3> Heart rate limits calulcator</h3>
    <p> Type in your age to know your heart rate limits</p>
      <form>
        <div>
          <label>Age </label>
          <br></br>
          <input type="number" value={age} onChange={e => setAge(e.target.value)} />
        </div>
        <br></br>
        <div>
          <label>Heart rate limits are: </label>
            <div>
              <output>{lowerLimit.toFixed(0)} - </output> 
              <output>{upperLimit.toFixed(0)}</output> 
            </div>
        </div>
        <button type="button" onClick={calculate}>Calculate</button>
      </form>
    
  </div>

    
  );
}

export default App;
