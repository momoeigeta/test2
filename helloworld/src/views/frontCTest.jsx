import React, { useState } from 'react';
import { getData } from '../variables/data';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import Answer from '../components/Answer';
import Questions from '../components/Questions';
// import './CSS/CounterApp.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        button: {
            marginTop: theme.spacing(1)
        },
    },
}));

const Selection = () => {
    const classes = useStyles();
    const [page, setPage] = useState(1);

    const CurrentData = getData.filter((data) => {
        return data.contents_detail_id === page;
    });
    const CurrentAnswer = CurrentData.map((data) => (
        <li key={data.contents_detail_id}>{data.answer}</li>
    ));

    const handleChange = (event, value) => {
        setPage(value);
    };

    const CurrentChoice1 = CurrentData.map((data) => (
        <li key={data.contents_detail_id}>{data.choice1}</li>
    ));
    const CurrentChoice2 = CurrentData.map((data) => (
        <li key={data.contents_detail_id}>{data.choice2}</li>
    ));
    const CurrentChoice3 = CurrentData.map((data) => (
        <li key={data.contents_detail_id}>{data.choice3}</li>
    ));
    const CurrentChoice4 = CurrentData.map((data) => (
        <li key={data.contents_detail_id}>{data.choice4}</li>
    ));

    return (
        <div className={classes.root}>
            <Card>
                {CurrentData.map((data) => (
                    <Questions key={data.contents_detail_id}
                        contents={data.contents_statement} />
                ))}
            </Card>
            {CurrentData.map((data) => (
                <Answer key={data.contents_detail_id}
                    answer={CurrentAnswer}
                    choice1={CurrentChoice1}
                    choice2={CurrentChoice2}
                    choice3={CurrentChoice3}
                    choice4={CurrentChoice4}
                />
            ))}
            <Pagination style={{ display: 'inline-block' }}
                count={getData.length} page={page} onChange={handleChange} />

        </div>
    );
}

export default Selection;