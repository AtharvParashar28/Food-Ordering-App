import Contact from '../Contact';
import { sumoftwo } from '../sum';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

// Grouping test cases
describe("Grouped all the test cases", () => {

    // test case 1
    test('Testing sum function', () => {
        const res = sumoftwo(100,180);
    
        // ASSERTION(EXPECTED OUTPUT)
        expect(res).toBe(280);
    })

    // test case 2
    test('testing if heading is rendered on contact us page or not', () => {
        render(<Contact />)

        // Quering
        const heading = screen.getByRole("heading");

        // Assertion
        expect(heading).toBeInTheDocument();
    })

    // test case 3
    test('Button is loaded or not', () => {
        render(<Contact />);

        // Quering 
        const button = screen.getByRole("button");

        // Assertion
        expect(button).toBeInTheDocument();
    })


})
