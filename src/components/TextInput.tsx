import * as React from 'react'
import {useState} from 'react'

/* export const TextInput = (props:TextInputProps) : React.ReactElement => {
    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(e.target.value);
    }

    return (
        <input
            type="text"
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={handleChangeText}
        />
    )
} */

export const TextInput = (props:TextInputProps) : React.ReactElement => {
    const [text, setText] = useState<string>('');

    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (props.onChange) {
            props.onChange(text);
        }
        setText(e.target.value);
    }

    return (
        <input
            type="text"
            name={props.name}
            placeholder={props.placeholder}
            value={text}
            onChange={handleChangeText}
        />
    )
}

interface TextInputProps{
    name:string,
    placeholder:string,
    onChange:any
} 