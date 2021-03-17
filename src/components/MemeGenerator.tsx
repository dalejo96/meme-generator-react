import * as React from 'react'
import { useState, useEffect } from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import styled from 'styled-components';
//import { TextInput } from './TextInput'
import {Newmeme} from './Newmeme'
import {Button} from './Button'

export const MemeGenerator = () => {
    //let randomImages: IImages[] = [];
    const [topText, setTopText] = useState<string>('');
    const [randomImages, setRandomImages] = useState<IImage[]>([]);
    const [bottomText, setBottomText] = useState<string>('');
    const [randomImage, setImage] = useState<string>('http://i.imgflip.com/1bij.jpg');
    const [loading, setLoading] = useState(false);

    interface IImage {
        url: string,
    }

    const DIV = styled.div`
        margin:50px 300px 50px 300px;
    `;

    const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const randNum = Math.floor(Math.random() * randomImages.length)
        const randMemeImg = randomImages[randNum].url
        setImage(randMemeImg)
    }

    const handleChangeTopText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTopText(e.target.value)
    }

    const handleChangeBottomText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBottomText(e.target.value)
    }

    function sleep(milliseconds: number) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }

    const SearchMemes = async () => {
        try {
            await fetch("https://api.imgflip.com/get_memes")
                .then(response => response.json())
                .then(response => {
                    const { memes } = response.data
                    setRandomImages(memes);
                })
            sleep(2000);
            setLoading(true);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        SearchMemes();
    }, [])

    return (
        <div>
            {loading ? (
                <div>
                    <form
                        className="meme-form" onSubmit={handleSumbit}>
                        <input
                            type="text"
                            name="topText"
                            placeholder="Top Text"
                            value={topText}
                            onChange={handleChangeTopText}
                        />
                        <input
                            type="text"
                            name="bottomText"
                            placeholder="Bottom Text"
                            value={bottomText}
                            onChange={handleChangeBottomText}
                        />
                        <Button />
                    </form>
                    <Newmeme image={randomImage} topText={topText} bottomText={bottomText} />
                </div>
            ) : (
                <DIV>
                    <ReactBootStrap.Spinner animation="border" />
                </DIV>
            )}
        </div>
    )
}