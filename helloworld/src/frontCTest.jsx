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

    const [page, setPage] = React.useState(1);
    const [correctness, setCorrectness] = useState("");

    const CurrentData = getData.filter((data) => {
        return data.contents_detail_id === page;
    });

    let count = 0;
    let q_sel = 4;


    const question = CurrentData.map((data) => (
        <li key={data.contents_detail_id}>{data.choices[0]}</li>
    ));
    const choice1 = CurrentData.map((data) => (
        <li key={data.contents_detail_id}>{data.choices[1]}</li>
    ));
    const choice2 = CurrentData.map((data) => (
        <li key={data.contents_detail_id}>{data.choices[2]}</li>
    ));
    const choice3 = CurrentData.map((data) => (
        <li key={data.contents_detail_id}>{data.choices[3]}</li>
    ));

    // const answer = 2;

    const answer = CurrentData.map((data) => (
        <li key={data.contents_detail_id}>{data.choices[5]}</li>
    ));


    const handleClick = (selected) => {
        if (selected === answer) {
            setCorrectness("正解です！");
        } else {
            setCorrectness("不正解です！");
        }
    }




    const handleChange = (e, value) => {
        setPage(value);
    };

    return (
        <div>
            <Typography id="text_q">
                {question}
                {/* <div style={{backgroundImage:{img}}}></div> */}
            </Typography>

            <Button className="text_s" variant="contained" onClick={() =>handleClick(1)}>{choice1}</Button>
            <Button className="text_s" variant="contained" onClick={e => handleClick(answer)}>{choice2}</Button>
            <Button className="text_s" variant="contained" onClick={e => handleClick(e, 3)}>{choice3}</Button>
            <Button className="text_s" variant="contained" onClick={e => handleClick(e, 4)}>選択肢④</Button>
            <p>{correctness}</p>
            <p id="text_a">{answer}</p>
            {/* <p>{choice2}</p> */}




            <Pagination style={{ display: 'inline-block' }} count={getData.length} page={page} onChange={handleChange} />

        </div>
    );
}

export default Selection;
