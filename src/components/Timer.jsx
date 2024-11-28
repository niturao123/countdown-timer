import { useState } from "react"
export const Timer = ({ number }) => {
    const [n, setN] = useState(number)
    const runningTimer = setInterval(() => {
        setN(n - 1);
    }, 1000);
    if (n === 0) {
        clearInterval(runningTimer);
    }
    const restart = ()=>{
        setN(number);
    }
    return (
        <div className="container">
            <h1 className="number">{n}</h1>
            <button className="button" onClick={restart}>Restart</button>
        </div>
    )
}