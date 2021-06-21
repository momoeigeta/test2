import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const Answer = ({ choice1, choice2, choice3, choice4, answer }) => {
    const [correctness, setCorrectness] = useState("");

    const handleClick = (selected) => {
        if (selected === answer[0].props.children) {
            setCorrectness("正解です！");
        } else {
            setCorrectness("不正解です！");
        }
    };

    return (
        <div>
            <Button variant="contained" onClick={() => handleClick(1)} style={{fontSize: "15px"}}>{choice1}</Button>
            <Button variant="contained" onClick={() => handleClick(2)} style={{fontSize: "15px"}}>{choice2}</Button>
            <Button variant="contained" onClick={() => handleClick(3)} style={{fontSize: "15px"}}>{choice3}</Button>
            <Button variant="contained" onClick={() => handleClick(4)} style={{fontSize: "15px"}}>{choice4}</Button>
            <p style={{ fontSize: "15px" }}>
                {correctness}
            </p>
        </div>
    );
}

export default Answer;