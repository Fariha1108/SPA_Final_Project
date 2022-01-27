import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SingUp.css';

export const SingUp = () => {

    const navigate = useNavigate();

    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [passwordConfirmValue, setPasswordConfirmValue] = useState("");

    const handleNameChange = (e) => {
        setNameValue(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value)
    }

    const handlePasswordConfirmChange = (e) => {
        setPasswordConfirmValue(e.target.value)
    }

    return (
        <div className='Content'>

            <div className='flexBox'>
                <form className="Form">
                    <h1>Sign Up</h1>
                    <label className="title" for="name">Name</label>
                    <input className="input" id="name" onChange={handleNameChange} value={nameValue} />
                    <br />
                    <label className="title" for="email" type="email">Email</label>
                    <input className="input" id="email" type="email" onChange={handleEmailChange} value={emailValue} />
                    <br />
                    <label className="title" for="password">Password</label>
                    <input className="input" id="password" type="password" onChange={handlePasswordChange} value={passwordValue} />
                    <br />
                    <label className="title" for="password-confirm">Confirm Password</label>
                    <input className="input" id="password-confirm" type="password" onChange={handlePasswordConfirmChange} value={passwordConfirmValue} />
                    <br />
                    <br />
                    <p className="title">Erstelle jetzt deinen Account</p>
                    <button
                        id="btn"
                        onClick={() => navigate("/newcustomer")}
                    >
                        <i className="fas fa-light fa-paper-plane"></i>
                    </button>
                </form>
            </div>

            <div className='flexBox readOnly'>
                <p>{nameValue}</p>
                <p>{emailValue}</p>
                <p>{passwordValue}</p>
                <p>{passwordConfirmValue}</p>
            </div>

        </div>
    );
};
