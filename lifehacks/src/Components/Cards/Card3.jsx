import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';


export const Card3 = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='box3'>
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
