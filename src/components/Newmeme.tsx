import * as React from "react";

interface NewMemeProps {
  image: string;
  imageName: string;
  topText: string;
  bottomText: string;
}
export const Newmeme = ({
  image,
  imageName,
  topText,
  bottomText,
}: NewMemeProps): React.ReactElement => {
  return (
    <div className="meme">
      <img src={image} alt={imageName} />
      <h2 className="top">{topText}</h2>
      <h2 className="bottom">{bottomText}</h2>
    </div>
  );
};
