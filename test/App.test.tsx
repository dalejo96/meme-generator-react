import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {render,fireEvent} from '@testing-library/react'
import {App} from '../src/components/App'
import {Header} from '../src/components/Header'


/* describe('App component tests',()=>{
    let container;

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

describe('',()=>{
    it('it renders correctly',()=>{
        const {queryByTestId,queryByPlaceHolderName}=render(<Header/>);
        expect(queryByTestId('header-img')).toBeTruthy();
    })
})