import { useState } from 'react';
import './clickCounter.css';


interface clickCounterProps {
    title:string;
    message:string;
}

const ClickCounter = ({title,message}: clickCounterProps) => {
    const [count, setCount] = useState(0);

    const handleCounterClick = () => {
        console.log(`value of counterClick before click; ${count}`);
        setCount(count+1);
    };

    return (
        <div className="card">
            <h2>{title}</h2>
            <button onClick={handleCounterClick}>
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