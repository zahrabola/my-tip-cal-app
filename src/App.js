import "./App.css";
import {useState} from "react";


function App() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('10%')
  const [split, setSplit] = useState(1)

  function handleTipChange(event) {
    let value = event.target.value.replace('%','');
    if (value.indexOf('%') === -1) {
      value = value+'%';
    }
    setTip(value);
  }
 
  return (
    <div className="App">
      <div className="tip-contain">
        <label>Total Bill</label>
        <input type="text" placeholder={"0.00"} value={bill} 
        onChange={event => setBill(event.target.value)} />
        <label>Tip</label>
        <input type="text" placeholder={"0.00"} value={tip}
         onChange={handleTipChange}/>
        <div className="summary">
        <div className="split">
          <label>Split</label>
        <div className="split-control">
          <button> - </button>
        <span> {split} </span>
          <button> + </button>
        </div>
        </div>
        <div className="result">
        <label>Split Total</label>
        <span>200.00 </span>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
