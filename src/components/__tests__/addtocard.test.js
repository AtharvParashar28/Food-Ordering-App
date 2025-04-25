import '@testing-library/jest-dom';
import { screen,render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import appStore from '../../utils/appStore';
import { act } from 'react';  
import Header from '../Header'
import Menu from '../Menu';
import Cart from '../Cart'
import MOCKDATA from '../mocks/MenuMock.json';

// mocking fetch
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCKDATA)
        }
    })
})

it ("Should render Menu and add to cart button should function",async() =>{

    await act(async()=>{
    render(
        <BrowserRouter>
         <Provider store={appStore}>
            <Header/>
            <Menu/>
            <Cart/>
         </Provider>
        </BrowserRouter>
       
    )
})

    // const heading = screen.getByRole("heading");
    const heading = screen.getByRole("heading",{name:"Coffee & Beverages (Hot and Cold) (35)⬇"});
    expect(heading).toBeInTheDocument();

    // expanding the accordion
    fireEvent.click(heading);

    const AddBtn = screen.getAllByRole("button",{name:"Add"});

    fireEvent.click(AddBtn[0]);

    const cart = screen.getByText("Cart 1")

    expect(cart).toBeInTheDocument();

    const cartitem = screen.getAllByTestId("cartitem");

    expect(cartitem.length).toBe(1);


    
})