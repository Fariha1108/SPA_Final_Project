import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export const Card6 = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='box6'>
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