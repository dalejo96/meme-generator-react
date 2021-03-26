import { Button } from "react-bootstrap";
import * as React from "react";
import { Card } from "react-bootstrap";
import { useTheme } from "./ThemeContext";
import { navigate } from "@reach/router";

interface MemeCardProps {
  name: string;
  url: string;
}

export const MemeCard = ({ name, url }: MemeCardProps): React.ReactElement => {
  const { theme } = useTheme();
  const handleCardClick = () => {
    navigate("/custom-meme", { state: { url: url } });
  };

  const StyleCard = {
    backgroundColor: theme === "dark" ? "#7D7D7D" : "#E4E4E4",
  };

  return (
    <Card className="item" style={StyleCard}>
      <Card.Img className="imageItem" variant="top" src={url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button onClick={handleCardClick} variant={theme}>
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};
