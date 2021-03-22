import * as React from 'react'
import { useState, useEffect } from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import styled from 'styled-components';
//import { TextInput } from './TextInput'
import {Newmeme} from './Newmeme'
import {Button} from './Button'
import { TextInput } from './TextInput';
import axios from 'axios';


const DIV = styled.div`
margin:50px 300px 50px 300px;
`;

export const Start = ():React.ReactElement => {
    const [randomImages, setRandomImages] = useState<Image[]>([]);
    const [loading, setLoading] = useState(false);

    interface Image {
        url: string,
    }

    function sleep(milliseconds: number) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }

    

    useEffect(() => {
        const SearchMemes = async () => {
            try {
                await axios.get("https://api.imgflip.com/get_memes")
                    .then(response => {
                        const { memes } = response.data.data
                        setRandomImages(memes);
                    })
                sleep(2000);
                setLoading(true);
            } catch (error) {
                console.log(error);
            }
        }
        SearchMemes();
    }, [])


    return (
        <div>
            {loading ? (
                <span data-testid="span-url">{randomImages[0].url}</span>
            ) : (
                <DIV>
                    <ReactBootStrap.Spinner animation="border" />
                    <span >Loading data...</span>
                </DIV>
            )}
        </div>
    )
}