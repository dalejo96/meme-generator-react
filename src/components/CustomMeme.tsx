import * as React from "react";
import { useState } from "react";
import { Newmeme } from "./Newmeme";
import { TextInput } from "./TextInput";
import { RouteComponentProps, useLocation } from "@reach/router";
import { Nav } from "./Nav";
import { parse } from "query-string";

interface CustomMemeParams {
  urlImage: string;
}
//type alias
type CustomMemeProps = RouteComponentProps<CustomMemeParams>;

export const CustomMeme: React.FC<CustomMemeProps> = (props) => {
  const location = useLocation();
  const searchParams = parse(location.search);
  const imageUrl = searchParams.image as string;
  const [topText, setTopText] = useState<string>("");
  const [bottomText, setBottomText] = useState<string>("");

  const handleChangeTopText = (topText: string) => {
    setTopText(topText);
  };

  const handleChangeBottomText = (bottomText: string) => {
    setBottomText(bottomText);
  };

  return (
    <div>
      <Nav />
      <div className="meme-form">
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
      </div>
      <Newmeme image={imageUrl} topText={topText} bottomText={bottomText} />
    </div>
  );
};
