import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {render,fireEvent} from '@testing-library/react'
import {App} from './App'
import {Header} from './Header'
import { MemeGenerator } from './MemeGenerator'


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
        const {queryByTestId}=render(<Header/>);
        expect(queryByTestId('header-img')).toBeTruthy();
    })
    it('it renders correctly by test id a p',()=>{
        const {queryByTestId}=render(<Header/>);
        expect(queryByTestId('header-p')).toBeTruthy();
    })
})

describe('MemeGenerator component',()=>{
    it('it renders correctly by test id the general div',()=>{
        const {queryByTestId}=render(<MemeGenerator/>);
        expect(queryByTestId('div-meme')).toBeTruthy();
    })
})