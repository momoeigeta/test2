import React, { useState } from 'react';

import '../assets/styles/Home.css';
import './pagetop';
// import './textvalue';
import snowman from '../assets/images/snowman.jpg';
// import './menubar';

const Home = () => {

    // 文字数制限
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
        <div>
            <body className="body">

                <div className="Home">
                    <header className="header" style={{ height: 670 }}>
                        <h1 id="name">Momoe Igeta</h1>

                        <h1 id="logo"><a href="Portfolio.html"><img src={snowman} alt="snowman"></img></a></h1>


                        <canvas id="canvas"></canvas>

                        <nav id="menubar">
                            <ul>
                                <li><a href="#about">About</a></li>
                                <li><a href="#message">Message</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                    </header>
                </div>

                <div id="container">
                    <div id="contents">


                        <section id="about">
                            <h2>About</h2>
                            <dl>
                                <dt>氏名</dt>
                                <dd>井桁 百絵</dd>
                                <dt>所属</dt>
                                <dd>フォース株式会社</dd>
                                <dt>生年月日</dt>
                                <dd>1998/09/25</dd>
                                <dt>経歴</dt>
                                <dd>立教大学法学部を卒業後、フォース株式会社に入社</dd>
                                <dt>資格</dt>
                                <dd>
                                    <ul>
                                        <li>実用英語技能検定2級</li>
                                        <li>普通自動車第一種運転免許</li>
                                        <li>「ハングル」能力検定3級</li>
                                    </ul>
                                </dd>
                                <dt>自己紹介</dt>
                                <dd><p>私は文系で未経験ですが、常に学ぶ姿勢を忘れずに基礎からしっかりと学び計画的に資格を取得するなど、少しずつですができることを増やしていきたいと考えています。
                                学生時代にアルバイトやボランティアを経験し、誰かの支えになりたいという思いが芽生えました。
            そして、社会の基盤といわれるインフラを支え、システムを通してお客様の役に立てるようになり、その結果として社会に貢献できる人材になりたいと考えています。</p></dd>
                            </dl>
                        </section>

                        <section id="message">

                            <h2>Message</h2>
                            <p class="m">メッセージがありましたら、以下のフォームよりお送りください。</p>
                            <div class="Form">

                                <div class="Form-Item">
                                    <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>お名前</p>
                                    <input type="text" class="Form-Item-Input" placeholder="例）山田太郎"></input>
                                </div>

                                <div class="Form-Item">
                                    <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>電話番号</p>
                                    <input type="text" class="Form-Item-Input" placeholder="例）000-0000-0000"></input>
                                </div>

                                <div class="Form-Item">
                                    <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>メールアドレス</p>
                                    <input type="email" class="Form-Item-Input" placeholder="例）example@gmail.com"></input>
                                </div>

                                <div class="Form-Item">
                                    <p class="Form-Item-Label isMsg"><span class="Form-Item-Label-Required">必須</span>お問い合わせ内容</p>
                                    <textarea class="Form-Item-Textarea" id="test" placeholder="5文字以上" onChange={(e) => handleChange(e)}></textarea>
                                    <p id="validation"></p>

                                </div>

                                <input type="submit" class="Form-Btn" value="Submit" onClick={addTask}></input>

                            </div>
                            <div>
                                <ul>
                                    {taskList.map((task, index) => (
                                        <li key={index}>{task}</li>
                                    ))}
                                </ul>
                            </div>


                        </section>

                        <section id="contact">

                            <h2>Contact</h2>
                            <a href="mailto:momoe.igeta@force-corp.co.jp">momoe.igeta@force-corp.co.jp</a>
                        </section>

                        <a href="#top" id="btn-backtotop">↑</a>
                        <script src="js/pagetop.js"></script>




                    </div>

                </div>
            </body>
        </div>

    );
}




export default Home;