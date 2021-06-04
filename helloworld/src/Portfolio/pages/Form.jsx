import React, { useState } from 'react';

const Form = () => {

    const [taskList, setTaskList] = useState([]);
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        setValue(e.target.value);
    };

    const addTask = () => {
        const newTask = [...taskList, value];
        if (value.length < 5) {
            alert("5文字以上入力してください。");
        } else {
            setTaskList(newTask);
            // setTaskList([...taskList,value]); //(['','ddd','ssss'])
            setValue("");
        }
    };


    return (
        <div class="Form">
            <div class="Form-Item">
                <p class="Form-Item-Label">
                    <span class="Form-Item-Label-Required">必須</span>お名前
                    </p>
                <input
                    type="text"
                    class="Form-Item-Input"
                    placeholder="例）山田太郎"
                ></input>
            </div>

            <div class="Form-Item">
                <p class="Form-Item-Label">
                    <span class="Form-Item-Label-Required">必須</span>電話番号
                 </p>
                <input
                    type="text"
                    class="Form-Item-Input"
                    placeholder="例）000-0000-0000"
                ></input>
            </div>

            <div class="Form-Item">
                <p class="Form-Item-Label">
                    <span class="Form-Item-Label-Required">必須</span>
                  メールアドレス
                </p>
                <input
                    type="email"
                    class="Form-Item-Input"
                    placeholder="例）example@gmail.com"
                ></input>
            </div>

            <div class="Form-Item">
                <p class="Form-Item-Label isMsg">
                    <span class="Form-Item-Label-Required">必須</span>
                   お問い合わせ内容
                </p>
                <textarea
                    class="Form-Item-Textarea"
                    id="test"
                    placeholder="5文字以上"
                    onChange={(e) => handleChange(e)}
                ></textarea>
                <p id="validation"></p>
            </div>

            <input
                type="submit"
                class="Form-Btn"
                value="Submit"
                onClick={addTask}
            ></input>
            <ul>
                {taskList.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    )
};

export default Form;