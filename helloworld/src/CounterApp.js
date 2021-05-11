import React, { useState } from 'react';
import './CounterApp.css';

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

const CounterApp = () => {
    return (
        <div className="container">
            <ul>
                <li><Counter color="tomato" /></li>
                <li><Counter color="skyblue" /></li>
                <li><Counter color="limegreen" /></li>
            </ul>
        </div>
    );
}

export default CounterApp;