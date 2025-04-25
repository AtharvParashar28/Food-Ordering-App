import Header from '../Header'
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import appStore from '../../utils/appStore';
import ResCard from '../ResCard';
import { PromotedRes } from '../ResCard';


describe("testing header componenet", () => {
    // test case 1
    test("Checking whether header is rendered with login/logout button or not", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )

        // quering
        // Checking if button is rendering on Header with a name login and onclick it should change to logout
        const button1 = screen.getByRole('button',{name:"login"});
        
        // clicking the button
        fireEvent.click(button1);

        const button2 = screen.getByRole('button',{name:"logout"});

        // Assertion
        expect(button2).toBeInTheDocument();

        fireEvent.click(button2);

        expect(button1).toBeInTheDocument();

    })
})