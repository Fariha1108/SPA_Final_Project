import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './Cards.css';

export const Card8 = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='box8'>
                <Button
                    color='violet'
                    className='cardBtn'
                    onClick={() => navigate("/favhacks")}
                >
                    Save
                </Button>
            </div>
        </>
    );
};