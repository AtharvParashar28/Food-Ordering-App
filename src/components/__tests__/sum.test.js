import {sumoftwo} from '../sum'

test.skip('Testing sum function', () => {
    const res = sumoftwo(100,180);

    // ASSERTION(EXPECTED OUTPUT)
    expect(res).toBe(280);
})