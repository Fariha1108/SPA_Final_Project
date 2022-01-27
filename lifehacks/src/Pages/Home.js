import React, { useState, useEffect } from 'react';
import { Loading, Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8 } from '../Components';

import { Segment, Card } from 'semantic-ui-react';
import './General.css';



export const Home = () => {

    //const pinterestAPI = require('pinterest-api');

    //const pinterest = pinterestAPI();
    //console.log(pinterest);

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(null);

    const getData = () => {
        setIsLoading(true);

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setData(json);
                setIsLoading(false);
            });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <Segment placeholder>
                {
                    !isLoading ?
                        // zeige den inhalt
                        <div>
                            <h3 className='description'>The <span className='Logo'>best way to live</span> is immer up to date zu sein und Spaß am Leben zu haben.<br />Bei uns findest du interessante Tipps & Tricks für den Alltag, einige tolle und schnelle Rezepte zum selberkochen<br />und und und ... <br /></h3>
                            <br />
                            <h3 className='description'>Hier findest du ein paar tolle Ideen...</h3>
                            <br />
                            <br />

                            <Card.Group className='center'>
                                <Card1 />
                                <Card2 />
                                <Card3 />
                                <Card4 />
                                <Card5 />
                                <Card6 />
                                <Card7 />
                                <Card8 />
                            </Card.Group>
                        </div>
                        :
                        // zeige den Loader
                        <Loading />
                }
            </Segment>
        </div>
    );
};
