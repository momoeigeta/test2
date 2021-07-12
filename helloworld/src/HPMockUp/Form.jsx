import React, { useState } from 'react';
import './Contact.css';

const Form = () => {


    return (
        <div class="Form">

            <div class="Form-Item">
                <p class="Form-Item-Label">
                    お名前
                    <span className="caution">*</span>
                </p>
                <input type="text" class="Form-Item-Input">
                </input>
            </div>

            <div class="Form-Item">
                <p class="Form-Item-Label">
                    会社名・法人名・団体名
                    <span className="caution">*</span>
                    ※個人のお客様は「個人」とご記入ください
                </p>
                <input type="text" class="Form-Item-Input">
                </input>
            </div>

            <div class="Form-Item">
                <p class="Form-Item-Label">
                    <span class="Form-Item-Label-Required">必須</span>部署・役職等*
                </p>
                <input type="text" class="Form-Item-Input">
                </input>
            </div>

            <div class="Form-Item">
                <p class="Form-Item-Label">
                    <span class="Form-Item-Label-Required">必須</span>
                    メールアドレス*
                </p>
                <input type="email"
                    class="Form-Item-Input"
                ></input>

            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label">
                    <span class="Form-Item-Label-Required">必須</span>電話番号*
                </p>
                <input type="tel" class="Form-Item-Input">
                </input>

            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label">
                    <span class="Form-Item-Label-Required">必須</span>郵便番号*
                </p>
                <input type="postal-code" class="Form-Item-Input">
                </input>

            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label">
                    <span class="Form-Item-Label-Required">必須</span>都道府県*
                </p>
                <input type="address-level1" class="Form-Item-Input">
                </input>

            </div>
            <div class="Form-Item">
                <p class="Form-Item-Label">
                    <span class="Form-Item-Label-Required">必須</span>ご住所*
                </p>
                <input type="text" class="Form-Item-Input">
                </input>
            </div>

            <div class="Form-Item">
                <p class="Form-Item-Label isMsg">
                    <span class="Form-Item-Label-Required">必須</span>
                    メッセージ本文*
                </p>
                <textarea
                    class="Form-Item-Textarea"
                    id="test"
                // onChange={(e) => handleChange(e)}
                ></textarea>
                <p id="validation"></p>
            </div>

            <input
                type="submit"
                class="Form-Btn"
                value="確認画面へ"
            ></input>
        </div>

    )
}
export default Form;