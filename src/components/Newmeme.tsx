import * as React from "react";

interface NewMemeProps {
  image: string;
  topText: string;
  bottomText: string;
}
export const Newmeme = ({
  image,
  topText,
  bottomText,
}: NewMemeProps): React.ReactElement => {
  return (
    <div className="meme">
      <img src={image} alt="" />
      <h2 className="top">{topText}</h2>
      <h2 className="bottom">{bottomText}</h2>
    </div>
  );
};
