import React, { useState } from 'react';

const TaskBoard2 = () => {
    const [taskList, setTaskList] = useState([]);
    const [value, setValue] = useState("");

    const handleChange = e => {
        const newValue = e.target.value;
        setValue(newValue);
    }

    const addTask = () => {
        const newTask = [...taskList, value];
        setTaskList(newTask);
        setTaskList([...taskList,value]); //(['','ddd','ssss'])
        setValue("");
    };

    return (
        <div>
            <div>
                <h1>タスクリスト</h1>
                <input type="text" value={value} onChange={e => handleChange(e)} />
                <button onClick={addTask}>追加</button>
                <p>{value}</p>
            </div>
            <div>
                <ul>
                    {taskList.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TaskBoard2;