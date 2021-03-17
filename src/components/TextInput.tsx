import * as React from 'react'
import { useState, useEffect } from 'react'

export const TextInput = (props:TextInputProps) => {
    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(e.target.value);
    }

    return (
        <input
            data-testid={props.dataid}
            type="text"
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={handleChangeText}
        />
    )
}

interface TextInputProps{
    name:string,
    placeholder:string,
    dataid:string,
    value:string,
    onChange:any
} 