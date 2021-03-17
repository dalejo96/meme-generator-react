import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { render, fireEvent } from '@testing-library/react'
import { MemeGenerator } from '../src/components/MemeGenerator'
import { Button } from '../src/components/Button'


describe('Input value Top Text', () => {
    it('updates on change', () => {
        const {getByPlaceholderText} = render(<MemeGenerator/>);
        const topTextInput = getByPlaceholderText('Top text') as HTMLInputElement;        
        fireEvent.change(topTextInput,{target:{value: "something"}});
        expect(topTextInput.value).toBe("somehing");

        /* const renderObj = render(<MemeGenerator/>);
        const topTextInput =  renderObj.container.querySelector('input[name="toptext"]') as HTMLInputElement;
        fireEvent.change(topTextInput,{target:{value: "something"}});
        expect(topTextInput.value).toBe("somehing"); */
    })
})

describe('Button click',()=>{
    it('Validate left click',()=>{
        const leftClcik = { button: 0 };
        const {getByText} = render(<Button/>);
        fireEvent.click(getByText('Generate'),leftClcik);
    })
})