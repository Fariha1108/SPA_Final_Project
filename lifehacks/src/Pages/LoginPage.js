import React, { useContext } from 'react';
import { PageContext } from '../PageContext';
import { Segment, Button } from 'semantic-ui-react';
import { Login } from '../Components';
import './General.css';

export const LoginPage = () => {

    const { isLoggedIn, setIsLoggedIn } = useContext(PageContext);

    return (
        <div>
            {
                isLoggedIn ?
                    <div>
                        <Segment>
                            <Button color='violet' onClick={() => setIsLoggedIn(false)}>Logout</Button>
                        </Segment>
                    </div>
                    :
                    <div>
                        <Login />
                    </div>
            }
        </div >
    );
};
