import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {render,fireEvent} from '@testing-library/react'
import {App} from '../src/components/App'
import {Header} from '../src/components/Header'
import { MemeGenerator } from '../src/components/MemeGenerator'
import { Button } from '../src/components/Button'


/* describe('App component tests',()=>{
    let container:any;

    beforeEach(()=>{
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<App/>,container);
    })

    afterEach(()=>{
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document',()=>{
        const inputs = container.querySelectorAll('h1');
        expect(inputs).toHaveLength(1);
    })


})  */

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
        const {getByPlaceholderText}=render(<MemeGenerator/>);
        expect(getByPlaceholderText('Top Text')).toBeTruthy();
    })
    it('it renders correctly with getByPlaceholderText the top input',()=>{
        const {getByPlaceholderText}=render(<MemeGenerator/>);
        expect(getByPlaceholderText('Bottom Text')).toBeTruthy();
    })
})
