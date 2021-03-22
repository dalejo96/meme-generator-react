import * as React from 'react'
import {render,cleanup,waitFor} from '@testing-library/react'
import axiosMock from '../src/__mocks__/axios'
import {Start} from '../src/components/Start'

afterEach(cleanup);

it('fetches and displays loading',async()=>{
    const {getByText}=render(<Start/>);
    //asertion
    expect(getByText('Loading data...')).toBeTruthy();
})

/* it('fetches and call get one time',async()=>{
    axiosMock.get.mockResolvedValueOnce({data:{url:'https://i.imgflip.com/30b1gx.jpg'}})
    const {getByText}=render(<Start/>);
    expect(getByText('Loading data...')).toHaveTextContent('Loading data...')
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
})
 */
it('fetches and call get one time',async()=>{
    axiosMock.get.mockResolvedValueOnce({data:{url:'https://i.imgflip.com/30b1gx.jpg'}})

    const {getByText,getByTestId,getByLabelText}=render(<Start  />);
    //expect(getByText('Loading data...')).toBeTruthy();
    await waitFor(()=> getByText('Loading data...'))
    const resolvedSpan = await waitFor(()=>{getByTestId('span-url')});
    expect(resolvedSpan).toHaveTextContent('https://i.imgflip.com/30b1gx.jpg')
})