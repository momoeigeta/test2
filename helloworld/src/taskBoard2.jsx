import React, { useState } from 'react';
import './CSS/CounterApp.css';

const TaskBoard2 = () => {
    const [taskList, setTaskList] = useState([]);
    const [value, setValue] = useState("");

    const handleChange = e => {
        const newValue = e.target.value;
        setValue(newValue);
        setValue(e.target.value);
    }

    const addTask = () => {
        const newTask = [...taskList, value];
        setTaskList(newTask);
        // setTaskList([...taskList,value]); //(['','ddd','ssss'])
        setValue("");
    };

    return (
        <div>
            <div>
                <h1>タスクリスト</h1>
                <input type="text" value={value} onChange={e => handleChange(e)} />
                <button className="Form-Btn" onClick={addTask}>追加</button>
                <p>{value}</p>
            </div>
            <div>
                {/* <ul> */}
                    {taskList.map((task, index) => (
                        <li style={{ listStyle: 'none' }} key={index}>{task}</li>
                    ))}
                {/* </ul> */}
            </div>
        </div>
    );
}

export default TaskBoard2;