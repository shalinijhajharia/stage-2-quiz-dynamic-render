import React, { useState } from "react"
import Result from "./results"
import quiz from "./source"
import App from '../App'
import ReactDOM from 'react-dom';
    
const Quiz = () => {
    const [value, setvalue] = useState(-1)
    const [score, setscore] = useState(0)
    const [sno, setno] = useState(0)
    console.log("current value", value);
    
    const next = () => {
        setno(sno => sno !== quiz.length - 1 ? ++sno : sno)
        setscore(score => value === currentquestion.correctIndex ? ++score : score)
        setvalue(-1)
    }
    const previous = () => {
        sno > 0 ? setno(no => --no) : setvalue(0)
        setscore(score => --score)

    }
    const currentquestion = quiz[sno]


    return (
        <React.Fragment>
            <h1>Question</h1>
            <span>{sno + 1} of {quiz.length}</span>
            <span>{currentquestion.question}</span>
            <div className="options">   
                {
                    currentquestion.answers.map((ele, index) => <div key={ele} id={index} onClick={() => setvalue(index)} >{ele}</div>)
                }
            </div>
            <div className="buttons">
                <button onClick={previous} disabled={sno !== 0 ? false : true}   >Previous</button>
                <button onClick={next} disabled={value !== -1 && sno !== quiz.length - 1 ? false : true} >Next</button>
                <button onClick={() => sno !== quiz.length - 1 ? ReactDOM.render(<App/>,document.querySelector(".App")) : ReactDOM.render(<Result point={ value === currentquestion.correctIndex ? (score+1) : score} total={quiz.length}  />,document.querySelector(".App"))} className={sno !== quiz.length - 1 ? "quit" : "submit"}  >{sno !== quiz.length - 1 ? "Quit" : "Submit "}</button>
            </div>
            <p>{score}/{quiz.length}</p>
        </React.Fragment>
    )

}
export default Quiz