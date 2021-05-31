import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Data from './variables/data';
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

    const question = Data.filter((data) => {
        return data.contents_detail_id === page;
    });

    // const answer = Data.map((data) => (
    //     <li key={data.contents_detail_id}>{data.answer}</li>
    // ));

    // const answer = question.map((data) => (
    //     <li key={data.contents_detail_id}>{data.answer}</li>))

    const handleClick = (selected) => {
        if (selected === Data.answer) {
            setCorrectness("正解です");
        } else {
            setCorrectness("不正解です");
        }
    }

    const handleChange = (e,value) => {
        setPage(value);
    };

    const choice1 = question.map((data) => (
        <li key={data.contents_detail_id} style={{ listStyle: 'none' }}>{data.choice1}</li>
    ));
    const choice2 = question.map((data) => (
        <li key={data.contents_detail_id} style={{ listStyle: 'none' }}>{data.choice2}</li>
    ));
    const choice3 = question.map((data) => (
        <li key={data.contents_detail_id} style={{ listStyle: 'none' }}>{data.choice3}</li>
    ));
    const choice4 = question.map((data) => (
        <li key={data.contents_detail_id} style={{ listStyle: 'none' }}>{data.choice4}</li>
    ));

    return (
        <div>
          <Typography>
            {question.map((data) => (
              <li key={data.contents_detail_id} style={{ listStyle: 'none' }}>{data.contents_statement}</li>
            ))}
            {/* <div style={{backgroundImage:{img}}}></div> */}
          </Typography>
    
          <Button style={{ margin: '20px 0' }} variant="contained" onClick={e => handleClick(e,1)}>{choice1}</Button>
          <Button variant="contained" onClick={e => handleClick(e,2)}>{choice2}</Button>
          <Button variant="contained" onClick={e => handleClick(e,3)}>{choice3}</Button>
          <Button variant="contained" onClick={e => handleClick(e,4)}>{choice4}</Button>
          <p>{correctness}</p>
    
          <Pagination style={{ display: 'inline-block' }} count={Data.length} page={page} onChange={handleChange} />
        </div>
      );
    }
    

    export default Selection;