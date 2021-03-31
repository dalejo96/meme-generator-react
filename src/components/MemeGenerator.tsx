import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import styled from "styled-components";
import { Newmeme } from "./Newmeme";
import Button from "./Button";
import { TextInput } from "./TextInput";

const DIV = styled.div`
  margin: 50px 300px 50px 300px;
`;

interface MemeGeneratorProps {
  apiCall: () => any;
}

export const MemeGenerator = ({
  apiCall,
}: MemeGeneratorProps): React.ReactElement => {
  const [topText, setTopText] = useState<string>("");
  const [randomImages, setRandomImages] = useState<Image[]>([]);
  const [bottomText, setBottomText] = useState<string>("");
  const [randomImage, setImage] = useState<string>(
    "http://i.imgflip.com/1bij.jpg"
  );
  const [loading, setLoading] = useState(false);

  interface Image {
    url: string;
  }

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const randNum = Math.floor(Math.random() * randomImages.length);
    const randMemeImg = randomImages[randNum].url;
    setImage(randMemeImg);
  };

  const handleChangeTopText = (topText: string) => {
    setTopText(topText);
  };

  const handleChangeBottomText = (bottomText: string) => {
    setBottomText(bottomText);
  };

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
        await apiCall().then((response: any) => {
          const { memes } = response.data.data;
          setRandomImages(memes);
        });
        sleep(1000);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    };
    SearchMemes();
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <form className="meme-form" onSubmit={handleSumbit}>
            <TextInput
              name="topText"
              placeholder="Top Text"
              onChange={handleChangeTopText}
            />
            <TextInput
              name="bottomText"
              placeholder="Bottom Text"
              onChange={handleChangeBottomText}
            />
            {/* {withCounter(Button)} */}
            {/* {Button()} */}
            {<Button />}
          </form>
          <Newmeme
            image={randomImage}
            topText={topText}
            bottomText={bottomText}
          />
        </div>
      ) : (
        <DIV>
          <ReactBootStrap.Spinner animation="border" />
        </DIV>
      )}
    </>
  );
};
