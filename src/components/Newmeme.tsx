import * as React from "react";

interface NewMemeProps {
  image: string;
  topText: string;
  bottomText: string;
}
export const Newmeme = (props: NewMemeProps): React.ReactElement => {
  return (
    <div className="meme">
      <img src={props.image} alt="" />
      <h2 className="top">{props.topText}</h2>
      <h2 className="bottom">{props.bottomText}</h2>
    </div>
  );
};
