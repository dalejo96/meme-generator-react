import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { render, fireEvent } from '@testing-library/react'
import { MemeGenerator } from './MemeGenerator'


describe('Input value Top Text', () => {
    it('updates on change', () => {
        const {queryByTestId} = render(<MemeGenerator/>);
        const topTextInput = queryByTestId('top-input') as HTMLInputElement;
        fireEvent.change(topTextInput,{target:{value: "something"}});
        expect(topTextInput.value).toBe("somehing");

        /* const renderObj = render(<MemeGenerator/>);
        const topTextInput =  renderObj.container.querySelector('input[name="toptext"]') as HTMLInputElement;
        fireEvent.change(topTextInput,{target:{value: "something"}});
        expect(topTextInput.value).toBe("somehing"); */
    })
})

/* describe('Button click',()=>{
    it('Validate left click',()=>{
        const rightClick = { button: 0 };
        const {queryByTestId} = render(<MemeGenerator/>);
        fireEvent.click(queryByTestId('button-gen'));



    })
}) */