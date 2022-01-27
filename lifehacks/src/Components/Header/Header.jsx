import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { PageContext } from '../../PageContext';

import { Button, Menu, Icon } from 'semantic-ui-react'
import "./Header.css";

export const Header = () => {

    const { isLoggedIn, setIsLoggedIn } = useContext(PageContext);

    return (
        <>
            <div className='logo tracking-in-contract'>BWL ...the best way to live</div>
            <Menu size='large' inverted color="grey" >
                <Menu.Item >
                    <NavLink to="/"><Icon name="home" size="large" className="homeStyle" /></NavLink>
                </Menu.Item>
                <Menu.Menu position='right' >
                    <Menu.Item>
                        {
                            isLoggedIn ?
                                <NavLink to="/favhacks">Your favorite life hacks</NavLink>
                                :
                                <NavLink to="/createaccount">Create an account</NavLink>
                        }
                    </Menu.Item>
                    <Menu.Item>
                        {
                            isLoggedIn ?
                                <Button color='violet' onClick={() => setIsLoggedIn(false)}>Logout</Button>
                                :
                                <Button color='purple' onClick={() => setIsLoggedIn(true)}>Login</Button>
                        }
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </>
    );
};
