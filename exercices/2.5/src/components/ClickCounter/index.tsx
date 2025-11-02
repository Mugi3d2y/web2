import { useInsertionEffect, useState } from 'react';
import './clickCounter.css';


interface clickCounterProps {
    title:string;
    messageIfUpperThan10:string;
    messageIfMouseHoverOnButton: string;
}



const ClickCounter = ({title,messageIfUpperThan10: message, messageIfMouseHoverOnButton: hoverMessage}: clickCounterProps) => {
    const [count, setCount] = useState(0);
    const handleCounterClick = () => {
        console.log(`value of counterClick before click : ${count}`);
        setCount(count+1);
    };

    const [onButton, setOnButton] = useState(false);

    const handleButtonHoverEnter = () => {
        setOnButton(true);
    };

    const handleButtonHoverLeave = () => {
        setOnButton(false);
    };
   
    return (
        <div className="card">
            <h2>{title}</h2>
            {onButton === true ? <p>{hoverMessage}</p> : null }
            <button onClick={handleCounterClick} onMouseEnter={handleButtonHoverEnter} onMouseLeave={handleButtonHoverLeave} >
            count is {count}
            </button>
            {count > 9 ? <p>{message}</p> : null}
            <p>
            Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </div>
    )
}

export default ClickCounter