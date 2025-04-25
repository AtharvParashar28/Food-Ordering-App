import '@testing-library/jest-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import { act } from 'react';
import Menu from '../Menu';
import Header from '../Header';
import Cart from '../Cart';
import MOCKDATA from '../mocks/MenuMock.json';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCKDATA)
        }
    })
})
it("Remove from cart button should function", async () => {

    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                    <Menu />
                    <Cart/>
                </Provider>
            </BrowserRouter>    

        )
    })

    const heading = screen.getByRole("heading",{name:"Coffee & Beverages (Hot and Cold) (35)⬇"});

    // console.log("headings",heading);

    fireEvent.click(heading);

    const add = screen.getAllByRole("button",{name:"Add"});

    fireEvent.click(add[0]);
    fireEvent.click(add[1]);
    fireEvent.click(add[3]);

    const cart = screen.getByText("Cart 3");

    fireEvent.click(cart);

    const remove = screen.getAllByRole("button",{name:"Remove -"});

    const cartitem = screen.getAllByTestId("cartitem");

    const clearcart = screen.getByRole("button",{name:"CLEAR CART"});

    // expect(cartitem.length).toBe(3);
    fireEvent.click(remove[0]);

    fireEvent.click(clearcart);

    const emptycart = screen.getByText("Cart is Empty");

    expect(emptycart).toBeInTheDocument();

    // console.log("after clicking on clear cart",cartitem.length);

    // expect(cartitem.length).toBe(0);

    // fireEvent.click(clearcart);

    // expect(cartitem.length).toBe(0);
})