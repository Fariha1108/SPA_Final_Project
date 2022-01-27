import React, { useContext } from 'react';
import { PageContext } from '../PageContext';
import { Button } from 'semantic-ui-react'

export const Login = () => {

    const { isLoggedIn, setIsLoggedIn } = useContext(PageContext);

    return (
        <div>
            {
                isLoggedIn ?
                    <Button color='violet' onClick={() => setIsLoggedIn(false)}>Logout</Button>
                    :
                    <Button color='purple' onClick={() => setIsLoggedIn(true)}>Login</Button>
            }
        </div>
    );
};
