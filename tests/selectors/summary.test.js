import summary from '../../src-cli/redux/selectors/summary'
import { expenses } from '../fixtures/expenses-and-filters'

test('Should return sum of expenses', () => {
    expect(summary(expenses)).toBe(45250)
})

test('Should return one expense if one provided', () => {
    expect(summary([expenses[1]])).toBe(40000)
})

test('Should return 0 if no expenses are provided', () => {
    expect(summary([])).toBe(0)
})