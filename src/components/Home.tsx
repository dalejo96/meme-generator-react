import { RouteComponentProps } from "@reach/router";
import * as React from "react";
import { useEffect, useState } from "react";
import { Nav } from "./Nav";
import { callApi } from "../../services/DataImages";
import { MemeCard } from "./MemeCard";

interface ImageData {
  url: string;
  name: string;
  id: string;
}

interface HomeProps extends RouteComponentProps {
  apiCall: () => any;
}

export const Home = ({ apiCall }: HomeProps): React.ReactElement => {
  const [randomImageData, setRandomImageData] = useState<ImageData[]>([]);

  useEffect(() => {
    const SearchMemes = async () => {
      try {
        await apiCall().then((response: any) => {
          const { memes } = response.data.data;
          setRandomImageData(memes);
        });
      } catch (error) {
        console.log(error);
      }
    };
    SearchMemes();
  }, []);

  return (
    <>
      <Nav />
      <div className="grid">
        {randomImageData.map((imageData) => (
          <MemeCard
            key={imageData.id}
            name={imageData.name}
            url={imageData.url}
          />
        ))}
      </div>
    </>
  );
};
