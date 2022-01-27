import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContext } from '../../PageContext';
import { Button } from 'semantic-ui-react';

export const Login = () => {

    const navigate = useNavigate();

    const { isLoggedIn, setIsLoggedIn } = useContext(PageContext);

    const { emailValue, setEmailValue } = useContext(PageContext);
    const { passwordValue, setPasswordValue } = useContext(PageContext);

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value)
    }

    return (
        <>
            <form className="Form FormLogin">
                <h1>Login</h1>
                <label className="title" for="email" type="email">Email</label>
                <input className="input" id="email" type="email" onChange={handleEmailChange} value={emailValue} />
                <br />
                <label className="title" for="password">Password</label>
                <input className="input" id="password" type="password" onChange={handlePasswordChange} value={passwordValue} />
                <br />
                <Button color='purple' onClick={() => setIsLoggedIn(true)}>Login</Button>
            </form>
            <br />
            <div className='singupText'>
                <h3 className='description'>Hast du noch keinen Account? Registriere dich hier.</h3>
                <br />
                <Button color='yellow' onClick={() => navigate("/createaccount")}>SingUp</Button>
            </div>
        </>
    );
};

