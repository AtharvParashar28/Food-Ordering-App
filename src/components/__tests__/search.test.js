import '@testing-library/jest-dom';
import { screen,render } from '@testing-library/react';
import {MOCKDATA} from '../mocks/body.mock.json';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import appStore from '../../utils/appStore';
import Body from '../Body'
import { act } from 'react';    

// Integration Testing

// Mocking fetch function for js-dom
global.fetch = jest.fn(()=>{
    // Fetch return a promise
    return Promise.resolve({
        // Promise contains json
        json : () => {
            // json contains mockdata(that is fetch from swiggy's API)
            return Promise.resolve(MOCKDATA);
        }
    })
})
describe("Testing whether search bar is functioning or not", () =>{
    // test case 1
    test ("It should render body with a search component" , async()=>{
        await act(async () => {
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )}
    )

    // querying
    const button = screen.getByRole('button',{name:"Search"});

    // Assertion
    expect(button).toBeInTheDocument();
    }
)
})