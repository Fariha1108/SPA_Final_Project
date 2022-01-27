import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Segment, Button } from 'semantic-ui-react';
import './General.css';

export const NewCustomer = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Segment placeholder>
                <h3 className='description'>Willkomen, gehe jetzt zum Home und pinne dir deine Favoriten auf deiner Seite.</h3>
                <br /><br />
                <div className='btnBox'>
                    <Button color='olive' onClick={() => navigate("/")}>Home</Button>
                    <Button color='green' onClick={() => navigate("/favhacks")}>Your favorite hacks</Button>
                </div>

            </Segment>
        </div>
    );
};
