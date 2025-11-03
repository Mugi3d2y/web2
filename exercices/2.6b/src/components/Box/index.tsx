import { useState } from 'react'
import './Box.css'



const Box = () => {
    const [count, setCount] = useState(0);

    const tableau = ["red","green","blue","yellow","purple"];

    return <>
        <div className='box'  style={{backgroundColor:tableau[count%tableau.length]}}>
            <button onClick={() => setCount(count+1)}>
                {tableau[(count+1)%tableau.length]}
            </button>
        </div>
    </>
}


export default Box