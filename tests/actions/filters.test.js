import moment from 'moment'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../src-cli/redux/actions/filters'

test('Should create object for text filter with provided value', () => {
    const text = 'abc'

    expect(setTextFilter(text)).toEqual({ type: 'SET_TEXT_FILTER', text})
})

test('Should create object for text filter with default value', () => {
    expect(setTextFilter()).toEqual({ type: 'SET_TEXT_FILTER', text: ''})
})

test('Should create object for sort by date', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE'})
})

test('Should create object for sort by amount', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT'})
})

test('Should create object for set start date', () => {
    const date = moment(1000)

    expect(setStartDate(date)).toEqual({ type: 'SET_START_DATE', date})
})

test('Should create object for set end date', () => {
    const date = moment(1000)

    expect(setEndDate(date)).toEqual({ type: 'SET_END_DATE', date})
})