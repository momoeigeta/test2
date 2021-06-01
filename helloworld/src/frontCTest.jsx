import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { getData } from './variables/data';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import './CSS/CounterApp.css';

// eslint-disable-next-line
const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const Selection = () => {

    const [correctness, setCorrectness] = useState("");
    // const answer = getData.map((data) => (
    //     <li key={data.contents_detail_id}>{data.answer}</li>
    // ));

    const answer = 3;

    const checkAnswer = (selected) => {
        if (selected === answer) {
            setCorrectness("正解です！");
        } else {
            setCorrectness("不正解です！");
        }
    }
    return (
        <div>
            <Button variant="contained" onClick={() => checkAnswer(1)}>選択肢①</Button>
            <Button variant="contained" onClick={() => checkAnswer(2)}>選択肢②</Button>
            <Button variant="contained" onClick={() => checkAnswer(3)}>選択肢③</Button>
            <Button variant="contained" onClick={() => checkAnswer(4)}>選択肢④</Button>
            <p>{correctness}</p>
            <p>{answer}</p>
        </div>
    );
}

export default Selection;
