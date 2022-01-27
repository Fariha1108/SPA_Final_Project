import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

export const Loading = () => {
    return (
        <>
            <Segment>
                <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer>

                <Image src='/images/wireframe/short-paragraph.png' />
            </Segment>
        </>
    );
};