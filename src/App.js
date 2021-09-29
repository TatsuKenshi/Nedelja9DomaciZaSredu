import {useState} from "react"
import "./App.css"

function App() {

  const [result, setResult] = useState(0)
  const [yournumber, setYournumber] = useState(0)
  const [steps, setSteps] = useState("0")

  return (
    <div className="App">
      <div className="calculator">
        <h2>Calculator</h2>
        <label htmlFor="result">Result display</label>
        <br />
        <input type="number" id="result" disabled value={result}/>
        <br />
        <br />
        <label htmlFor="yournr">Enter your number here</label>
        <br />
        <input type="number" id="yournr" value={yournumber} onChange={(e)=>{
          setYournumber(e.target.value)
        }
        } />
        <p>Choose an operation</p>
        <button onClick={
          ()=>{
            setResult(Number(result) + Number(yournumber))
            setYournumber(0)
            setSteps(steps + "+" + yournumber)
          }
        }>+</button>
        <button onClick={
          ()=>{
            setResult(Number(result) - Number(yournumber))
            setYournumber(0)
            setSteps(steps + "-" + yournumber)
          }
        }>-</button>
        <button onClick={
          ()=>{
            setResult(Number(result) * Number(yournumber))
            setYournumber(0)
            setSteps(steps + "*" + yournumber)
          }
        }>*</button>
        <button onClick={
          ()=>{
            setResult(Number(result) / Number(yournumber))
            setYournumber(0)
            setSteps(steps + "/" + yournumber)
          }
        }>/</button>
        <p>Calculation steps: {steps}</p>
        <button onClick={()=>{
          setResult(0)
          setYournumber(0)
          setSteps("0")
        }}>Clear</button>
      </div>
    </div>
  );
}

export default App;
