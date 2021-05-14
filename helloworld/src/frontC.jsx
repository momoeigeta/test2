import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
// eslint-disable-next-line
import {getData} from './variables/data';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const Selection  = () => {
    // eslint-disable-next-line
    const classes = useStyles();
  const [page, setPage] = React.useState(1);
    const [correctness,setCorrectness] = useState("");
    // const answer = getData.map((data) => (<li key={data.contents_detail_id}>{data.answer}</li>))
    const answer = 3;
    const [btnColor, setBtnColor] = useState("");

    const handleClick =(e,selected) => {
        // setBtnColor({classes.Buttoncolor:"primary");
        if (selected === answer) {
            setCorrectness("正解です");
        }else {
            setCorrectness("不正解です");
        }
    }

    const handleChange = (event, value) => {
    setPage(value);
  };

    return (
        <div>
            <p>{correctness}</p>
            <Button variant="contained" onClick={e => handleClick(e,1)}>選択肢①</Button>
            <Button variant="contained" onClick={e => handleClick(e,2)}>選択肢②</Button>
            <Button variant="contained" onClick={e => handleClick(e,3)}>選択肢③</Button>
            <Button variant="contained" onClick={e => handleClick(e,4)}>選択肢④</Button>
            <Typography>Page: {page}</Typography>
            <Pagination count={2} page={page} onChange={handleChange} />
        </div>
    );
}

export default Selection;