import "./App.css";
import {useState} from "react";
const [bill, setBill] = useState(initialState:'');

function App() {
  return (
    <div className="App">
      <div className="tip-contain">
        <label>Total Bill</label>
        <input type="text" placeholder={"0.00"} value={bill} 
        onChange={event => setBill(event.target.value)} />
        <label>Tip</label>
        <input type="text" placeholder={"0.00"} />
        <div className="summary">
        <div className="split">
          <label>Split</label>
        <div className="split-control">
          <button> - </button>
        <span> 1 </span>
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
