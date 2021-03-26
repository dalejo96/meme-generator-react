import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import styled from "styled-components";
import { Newmeme } from "./Newmeme";
import Button from "./Button";
import { TextInput } from "./TextInput";
import { RouteComponentProps } from "@reach/router";
import { Nav } from "./Nav";

interface CustomMemeParams {
  urlImage: string;
}
//type alias
type CustomMemeProps = RouteComponentProps<CustomMemeParams>;

export const CustomMeme: React.FC<CustomMemeProps> = (props) => {
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
      <Newmeme
        image={props.urlImage ?? ""}
        topText={topText}
        bottomText={bottomText}
      />
    </div>
  );
};
