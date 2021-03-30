import * as React from "react";
import { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import styled from "styled-components";
import { Newmeme } from "./Newmeme";
import Button from "./Button";
import { TextInput } from "./TextInput";
import { RouteComponentProps, useLocation, useParams } from "@reach/router";
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
      <Newmeme
        //image={props.location.state.url ?? ""}
        //image={props.urlImage ?? ""}
        image={imageUrl}
        topText={topText}
        bottomText={bottomText}
      />
    </div>
  );
};
