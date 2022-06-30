import moment from 'moment'
import filtersReducer from '../../src-cli/redux/reducers/filters'
import { defaultFiltersState } from '../fixtures/expenses-and-filters'

test('Should setup default filters state when initialized', () => {
    expect(filtersReducer(undefined, { type: '@@INIT' })).toEqual(defaultFiltersState)
})

test('Should setup text filter on state', () => {
    const text = 'Testing123'

    expect(filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text }).text).toBe(text)
})

test('Should setup sortBy date on state', () => {
    expect(filtersReducer({ ...defaultFiltersState, sortBy: 'amount'}, { type: 'SORT_BY_DATE' }).sortBy).toBe('date')
})

test('Should setup sortBy amount on state', () => {
    expect(filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' }).sortBy).toBe('amount')
})

test('Should setup start date on state', () => {
    const startDate = moment(0).add(1, 'day')

    expect(filtersReducer(undefined, { type: 'SET_START_DATE', date: startDate }).startDate).toEqual(startDate)
})

test('Should setup end date on state', () => {
    const endDate = moment(0).add(5, 'days')

    expect(filtersReducer(undefined, { type: 'SET_END_DATE', date: endDate }).endDate).toEqual(endDate)
})