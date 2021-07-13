import React from 'react';
import Header from './Header';
import './Contact.css';
import Form from './Form';
import Footer from './Footer';

const Contact = () => {

    return (
        <div>
            <Header />
            <div id="contact">
                <p>弊社に関してのご不明な点はこちらのフォームにて承ります。</p>
                <p>下記フォームにご記入いただきました皆様の個人情報は、
                    <span className="line">「個人情報保護ポリシー」</span>
                    に基づき取り扱わせていただきます。</p>
                <p>また、ご記入いただきました個人情報は、お問い合わせへご回答するのみに利用する目的で収集いたします。</p>
                <p className="caution">※全て必須項目です。</p>
            </div>
            <Form />
            <Footer />
        </div>
    );

};

export default Contact;