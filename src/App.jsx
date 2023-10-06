import React from 'react'
import "./App.css"
const App = () => {
  return (
    <div className="container">
        <h2>Speech to text converter</h2>
        <br/>
        <p>A React hook that converts speech from the microphone to text and makes it available to your Run
        components.</p>
        <div className="main-content">
        </div>
        <div className="btn-style">
        <button>copy</button>
        <button>Start Listening</button>
        <button>Stop Listening</button>
        </div>
        </div>
  )
}

export default App