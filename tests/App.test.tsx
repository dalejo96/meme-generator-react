import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {render,fireEvent} from '@testing-library/react'
import {App} from '../src/components/App'
import {Header} from '../src/components/Header'
import { MemeGenerator } from '../src/components/MemeGenerator'
import { Button } from '../src/components/Button'
import { TextInput } from '../src/components/TextInput'


describe('Header component',()=>{
    it('it renders correctly by test id an image',()=>{
        const {getByText}=render(<Header/>);
        expect(getByText('Meme Generator')).toBeTruthy();
    })
})

describe('Button component',()=>{
    it('it renders correctly by test id the general div',()=>{
        const {getByText}=render(<Button/>);
        expect(getByText('Generate')).toBeTruthy();
    })
})

describe('Meme Generator component',()=>{
    it('it renders correctly with getByPlaceholderText the top input',()=>{
        const {getByPlaceholderText}=render(<TextInput name="topText" placeholder="Top Text" onChange={''} />);
        expect(getByPlaceholderText('Top Text')).toBeTruthy();
    })
})
