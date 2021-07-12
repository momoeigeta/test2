import React, { useState } from 'react';
import Header from './Header';
import './Contact.css';
import Form from './Form';
const Contact = () => {

    // const [taskList, setTaskList] = useState([]);
    // const [value, setValue] = useState("");

    // const handleChange = (e) => {
    //     const newValue = e.target.value;
    //     setValue(newValue);
    //     setValue(e.target.value);
    // };
    return (
        <div>
            <Header />

            <div id="Contact">

                <p>弊社に関してのご不明な点はこちらのフォームにて承ります。</p>
                <p>下記フォームにご記入いただきました皆様の個人情報は、「個人情報保護ポリシー」に基づき取り扱わせていただきます。</p>
                <p>また、ご記入いただきました個人情報は、お問い合わせへご回答するのみに利用する目的で収集いたします。</p>
                <p className="caution">※全て必須項目です。</p>
            </div>
            <Form />
        </div>
    )

};

export default Contact;