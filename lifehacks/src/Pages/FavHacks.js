import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginPage } from '.';
import { Segment, Button } from 'semantic-ui-react';
import './General.css';

export const FavHacks = ({ isLoggedIn }) => {

    const navigate = useNavigate();

    return (
        <div>
            <Segment placeholder>
                {
                    !isLoggedIn ?
                        <LoginPage />
                        :
                        <div>
                            <h3 className='description'>Hi, schön dass du wieder da bist.<br />Was möchtest du heute lernen oder erfahren?</h3>
                            {/* zu Home funktioniert nicht */}
                            <h3 className='description'>Gehe zum Home, um neue Life Hacks zu endecken.</h3>
                            <br />
                            <Button color='olive' onClick={() => navigate("/home")}>Home</Button>
                        </div>
                }
            </Segment>
        </div>
    );
};
