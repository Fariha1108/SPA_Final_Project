import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Segment, Icon, Button } from 'semantic-ui-react';
import './General.css';

export const Error = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Segment>
                <h3 className='description'>Vertippt...&nbsp;&nbsp;&nbsp;<Icon aria-hidden='true' name='frown outline' size='large' /></h3>
                <br />
                <div className='btn'><Button color='orange' onClick={() => navigate(-1)}>Zurück zur vorherigen Seite</Button></div>
            </Segment>
        </div>
    );
};
