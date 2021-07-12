import React, { useState } from 'react';
import Contact from "./Contact";
import Header from './Header';
import './Contact.css';
// import './images/Top.jpg'
const Home2 = () => {
    const [state, setState] = useState();
//    const state =() => ({ Component: null });
const selectContact = () => setState(< Contact />)

    const handleClick = () => {
        selectContact()
    };

    // const { Component } = state;
    // if (component)  return <Component />;


    return (
        <div>
            <body className="body">

                <div>
                    <div>
                        {/* <div className="back"> */}

                            <Header />
                            {/* <header className="header" >
                                <h1>お問い合わせ</h1>
                            </header> */}
                        {/* </div> */}

                    </div>


                    <button id="button" onClick={() => handleClick()}>
                        

                            {/* <Contact /> */}
                        <p className="d" style={{ fontSize: "28px" }}>
                            お問い合わせはこちらから</p>
                        <p  className="d" style={{fontSize:"18px"}}>
                            お気軽にご相談・お問い合わせ下さい。</p>
                    </button>

                </div>

                <div>
                    <p className="c">お電話にてお問い合わせ頂く場合、フォース株式会社【総合係】まで
                    </p>
                    <p className="c"><span className="red">TEL 03-5259-5231</span>
                        <p className="d">平日9:30〜18:30</p>
                    </p>
                </div>
                
            </body>
            <Contact />
        </div >

    );
    <Route path="/Contact" component={Contact} />

}
export default Home2;