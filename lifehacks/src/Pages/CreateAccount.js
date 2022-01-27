import React from 'react';
import { SingUp } from '../Components';
import { Segment } from 'semantic-ui-react';
import './General.css';

export const CreateAccount = () => {
    return (
        <>
            <Segment placeholder>

                <h3 className='description'>Bitte registriere dich hier, um deine Favoriten auf deiner persönlichen Seite zu pinnen.</h3>

                <p className='description'>Du kannst nach deiner erfolgreichen Registrierung dich jederzeit einlogen, um deine gepinnten <span className='topic'>favorite Life Hacks</span> anzusehen.</p>

                <SingUp />
            </Segment>
        </>
    );
}




