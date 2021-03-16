import * as React from 'react'
import { useState, useEffect } from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import styled from 'styled-components';

export const MemeGenerator = () => {
    //let randomImages: IImages[] = [];
    const [topText, setTopText] = useState<string>('');
    const [randomImages, setRandomImages] = useState<IImages[]>([]);
    const [bottomText, setBottomText] = useState<string>('');
    const [randomImage, setImage] = useState<string>('http://i.imgflip.com/1bij.jpg');
    const [loading, setLoading] = useState(false);

    interface IImages {
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
        <div data-testid="div-meme">
            {loading ? (
                <div>
                    <form 
                        data-testid="form-gen"
                        className="meme-form" onSubmit={handleSumbit}>
                        <input
                            data-testid='top-input'
                            type="text"
                            name="topText"
                            placeholder="Top Text"
                            value={topText}
                            onChange={handleChangeTopText}
                        />
                        <input
                            data-testid='bottom-input'
                            type="text"
                            name="bottomText"
                            placeholder="Bottom Text"
                            value={bottomText}
                            onChange={handleChangeBottomText}
                        />
                        <button
                            data-testid='button-gen'
                        >Generate</button>
                    </form>
                    <div className="meme">
                        <img src={randomImage} alt="" />
                        <h2 className="top">{topText}</h2>
                        <h2 className="bottom">{bottomText}</h2>
                    </div>

                </div>
            ) : (
                <DIV>
                    <ReactBootStrap.Spinner animation="border" />
                </DIV>
            )}
        </div>
    )
}