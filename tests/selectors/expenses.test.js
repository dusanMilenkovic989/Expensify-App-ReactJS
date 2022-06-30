import moment from 'moment'
import visibleExpenses from '../../src-cli/redux/selectors/expenses'
import { expenses } from '../fixtures/expenses-and-filters'

test('Should filter by provided text filter value and sort by date', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    
    expect(visibleExpenses(expenses, filters)).toEqual([ expenses[2], expenses[1] ])
})

test('Should render all expenses when text filter is not provided and sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    
    expect(visibleExpenses(expenses, filters)).toEqual([ expenses[1], expenses[0], expenses[2] ])
})

test('Should filter when start date is provided in regards to date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }

    expect(visibleExpenses(expenses, filters)).toEqual([ expenses[2], expenses[0] ])
})

test('Should filter when end date is provided', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: moment(0).subtract(1, 'day')
    }

    expect(visibleExpenses(expenses, filters)).toEqual([ expenses[1] ])
})