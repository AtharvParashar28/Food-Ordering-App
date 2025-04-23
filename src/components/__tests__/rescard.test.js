import ResCard from "../ResCard";
import { PromotedRes } from "../ResCard";
import MockData from '../mocks/ResCard.mock.json'
import { screen,render } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import appStore from '../../utils/appStore';
    
describe("Testing ResCard and PromtedResCard",()=>{
    // test case 1
    test("Testing whether ResCard is rendered or not",() => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <ResCard resdata={MockData}/>
                </Provider>
            </BrowserRouter>
            );

        // quering 
        // const name = screen.getByText(/Pizza Hut/);
        const name = screen.getByText("Pizza Hut | 3.9/5");

        // Assertion
        expect(name).toBeInTheDocument();
    })

    // test case 2
    test("Testing promotedRes",()=>{
        const PromotedResCard = PromotedRes(ResCard);

        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <PromotedResCard resdata={MockData}/>);
                </Provider>
            </BrowserRouter>
        )
        // quering 
        const label = screen.getByText('Opened');

        // Assertion
        expect(label).toBeInTheDocument();
    })
})

