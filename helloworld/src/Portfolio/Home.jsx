import React from 'react';

import Form from "./pages/Form";
import Menubar from "./pages/Menubar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pagetop from './layouts/Pagetop';
import Canvas from './layouts/Canvas';

import snowman from './assets/images/snowman.jpg';
import './assets/styles/Home.css';

const Home = () => {

    return (
        <div>
            <body className="body">

                <div className="Home">
                    <header className="header" style={{ height: 670 }}>
                        <h1 id="name">Momoe Igeta</h1>

                        <h1 id="logo"><a href="Portfolio.html"><img src={snowman} alt="snowman"></img></a></h1>

                        <Canvas />
                        <Menubar />
                    </header>
                </div>

                <div id="container">
                    <div id="contents">

                        <section id="about">
                            <h2>About</h2>
                            <About />
                        </section>

                        <section id="message">
                            <h2>Message</h2>
                            <p class="m">メッセージがありましたら、以下のフォームよりお送りください。</p>
                            <Form />
                        </section>

                        <section id="contact">
                            <h2>Contact</h2>
                            <Contact />
                        </section>

                        <a href="#top" id="btn-backtotop">↑</a>
                        <Pagetop />

                    </div>
                </div>
            </body>
        </div>
    );
}

export default Home;