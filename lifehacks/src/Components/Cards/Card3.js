import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Image } from 'semantic-ui-react';


export const Card3 = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Card>
                <Card.Content>
                    <Image
                        size='small'
                        src='/images/avatar/large/steve.jpg'
                    />
                    <Card.Header>Rezept 3 Beispiel</Card.Header>
                    <Card.Meta>gesund & schnell</Card.Meta>
                    <Card.Description>
                        Koche auf deine Art <strong>leckeres Essen</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button
                            basic color='blue'
                            onClick={() => navigate("/login")}
                        >
                            Add to your FavHacks
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        </div>
    );
};
