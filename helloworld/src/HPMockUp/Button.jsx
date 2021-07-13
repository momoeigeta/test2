import React from 'react';
import { Link } from 'react-router-dom';
const Button = () => {

    return (
        <div>
            <button id="button">
                <Link to="/Contact">
                    <p className="d" style={{ fontSize: "28px" }}>
                        お問い合わせはこちらから</p>
                    <p className="d" style={{ fontSize: "18px" }}>
                        お気軽にご相談・お問い合わせ下さい。</p>
                </Link>
            </button>
        </div>
    );
};

export default Button;