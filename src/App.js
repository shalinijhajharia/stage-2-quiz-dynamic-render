import './App.css';
import Quiz from './components/quizpage';
import ReactDOM from 'react-dom';
import React from 'react';


function App() {
  const entertoquiz = () => {
    document.querySelector(".App").innerHTML = ""
    ReactDOM.render(
      <React.Fragment>
        <div className="quizboard"><Quiz /></div>,

      </React.Fragment>,
      document.querySelector(".App"))
  }
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <button className="play" onClick={entertoquiz}>Play</button>
    </div>
  );
}

export default App;