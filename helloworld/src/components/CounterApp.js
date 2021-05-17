import React, { useState } from 'react';
import '../CSS/CounterApp.css';

const Counter = (props) => {
    const [count, setCount] = useState(0);

    const countUp = () => {
        setCount(count + 1);
    }
    return (
        <div style={{ backgroundColor: props.color }} onClick={countUp}>
            {count}
        </div>
    );
}

const CounterApp = (props) => {
    return (
        <div className="container">
            <ul>
                <li><Counter color={props.color} /></li>
            </ul>
        </div>
    );
}

export default CounterApp;