import * as React from "react";
import { useState } from "react";
import { useTheme } from "./ThemeContext";

interface TextInputProps {
  name: string;
  placeholder: string;
  onChange: (text: string) => void;
}

export const TextInput = ({
  name,
  placeholder,
  onChange,
}: TextInputProps): React.ReactElement => {
  const { theme } = useTheme();
  const [text, setText] = useState<string>("");

  const themeStyle = {
    backgroundColor: theme === "dark" ? "#000000" : "#FFFFFF",
    color: theme === "dark" ? "#FFFFFF" : "#000000",
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setText(newText);
    if (onChange) {
      onChange(newText);
    }
  };

  return (
    <input
      style={themeStyle}
      type="text"
      name={name}
      placeholder={placeholder}
      value={text}
      onChange={handleChangeText}
    />
  );
};
