import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
// eslint-disable-next-line
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
  // eslint-disable-next-line
  // const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const [correctness, setCorrectness] = useState("");

  const current_data = getData.filter((data) => {
    return data.contents_detail_id === page;
  });




  const answer = current_data.map((data) => (
    <li key={data.contents_detail_id}>{data.answer}</li>))
  
  // getData.map((data) => (<li key={data.contents_detail_id}>{data.answer}</li>))
  // const answer = 3;
  // eslint-disable-next-line
  const [btnColor, setBtnColor] = useState("");

  const handleClick = (e, selected) => {
    // setBtnColor({classes.Buttoncolor:"primary");
    if (selected === answer) {
      setCorrectness("正解です");
    } else {
      setCorrectness("不正解です");
    }
  }

  const handleChange = (event, value) => {
    setPage(value);
  };





  const current_choice1 = current_data.map((data) => (
    <li key={data.contents_detail_id} style={{ listStyle: 'none' }}>{data.choice1}</li>
  ));
  const current_choice2 = current_data.map((data) => (
    <li key={data.contents_detail_id} style={{ listStyle: 'none' }}>{data.choice2}</li>
  ));
  const current_choice3 = current_data.map((data) => (
    <li key={data.contents_detail_id} style={{ listStyle: 'none' }}>{data.choice3}</li>
  ));
  const current_choice4 = current_data.map((data) => (
    <li key={data.contents_detail_id} style={{ listStyle: 'none' }}>{data.choice4}</li>
  ));

  // console.log(current_data.answer);

  return (
    <div>
      <Typography //style={{textAlign:'center'}}
      >
        {current_data.map((data) => (
          <li key={data.contents_detail_id} style={{ listStyle: 'none' }}>{data.contents_statement}</li>
        ))}
        {/* <div style={{backgroundImage:{img}}}></div> */}
      </Typography>

      <Button style={{margin: '20px 0'}} variant="contained" onClick={e => handleClick(e, 1)}>{current_choice1}</Button>
      <Button variant="contained" onClick={e => handleClick(e, 2)}>{current_choice2}</Button>
      <Button variant="contained" onClick={e => handleClick(e, 3)}>{current_choice3}</Button>
      <Button variant="contained" onClick={e => handleClick(e, 4)}>{current_choice4}</Button>
      <p>{correctness}</p>

      <Pagination style={{display: 'inline-block'}} count={getData.length} page={page} onChange={handleChange} />
    </div>
  );
}

export default Selection;