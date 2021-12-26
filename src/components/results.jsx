const Result = ({ point,total }) => {
    const score = Number.parseInt((point/total) * 100)
    console.log(score);
    const msg = score <= 40 ? "Pratice More!" : score < 80 ? "Revise Again and Try!" : "SuperAb"
    return (
        <div className="quizboard">
            <h1 className="msg">{msg}</h1>
            <h1 className="score">You Scored : {score}%</h1>
            <p>Total No. of questions :<span>{total}</span></p>
            <p>Total No. of Attempted : <span>{total}</span></p>
            <p>Total No. of Correct Answer : <span>{point}</span></p>
            <p>Total No. of Wrong Answer :  <span>{total-point}</span></p>




        </div>

    )
}

export default Result