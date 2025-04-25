import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import { MOCKDATA } from '../mocks/bodyMock.json';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import appStore from '../../utils/appStore';
import Body from '../Body'
import ResCard from '../ResCard';
import { act } from 'react';

// Delay
// const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Integration Testing

// Mocking fetch function for js-dom
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCKDATA);
        }
    })
})

it.skip("It should render body with a search component", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Body />
                </Provider>
            </BrowserRouter>
        )
    }
    )

    const rescard = screen.getByTestId('rescard');

    console.log(rescard?.length);
    // querying
    const Searchbutton = screen.getByRole('button', { name: "Search" });

    // Assertion
    // expect(Searchbutton).toBeInTheDocument();

    const SearchInput = screen.getByTestId("SearchInput");

    // fireEvent.change(SearchInput,{target:{value:"McDonald's"}});

    // fireEvent.click(Searchbutton);

    // expect(rescard.length).toBeGreaterThan(0);

}
)