import * as React from 'react'
import {useState} from 'react'

interface TextInputProps{
    name:string,
    placeholder:string,
    onChange:(text:string)=>void
} 

export const TextInput = ({name,placeholder,onChange}:TextInputProps) : React.ReactElement => {
    const [text, setText] = useState<string>('');

    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newText = e.target.value;
        setText(newText);
        if (onChange) {
            onChange(newText);
        }
    }

    return (
        <input
            type="text"
            name={name}
            placeholder={placeholder}
            value={text}
            onChange={handleChangeText}
        />
    )
}