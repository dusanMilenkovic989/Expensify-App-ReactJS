import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../src-cli/components/ExpenseListFilters'
import { defaultFiltersState, altFiltersState } from '../fixtures/expenses-and-filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters 
            filters={defaultFiltersState}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    )
})

test('Should render ExpenseListFilters with def filters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseListFilters with alt filters correctly', () => {
    wrapper.setProps({ filters: altFiltersState })
    
    expect(wrapper).toMatchSnapshot()
})

test('Should dispatch setTextFilter', () => {
    const text = 'Some new filter text'
    wrapper.find('input').simulate('change', { target: { value: text }})

    expect(setTextFilter).toHaveBeenLastCalledWith(text)
})

test('Should dispatch sortByDate filter', () => {
    wrapper
        .setProps({ filters: altFiltersState })
        .find('select')
        .simulate('change', { target: { value: 'date' } })

    expect(sortByDate).toHaveBeenCalled()
})

test('Should dispatch sortByAmount filter', () => {
    wrapper.find('select').simulate('change', { target: { value: 'amount' } })

    expect(sortByAmount).toHaveBeenCalled()
})

test('Should dispatch setStatDate', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate: defaultFiltersState.startDate })

    expect(setStartDate).toHaveBeenLastCalledWith(defaultFiltersState.startDate)
})

test('Should dispatch setEndDate', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate: undefined, endDate: defaultFiltersState.endDate })

    expect(setEndDate).toHaveBeenLastCalledWith(defaultFiltersState.endDate)
})

test('Should change state through DateRangePicker', () => {
    const calendarFocused = 'startDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)

    expect(wrapper.state()).toEqual({ calendarFocused })
})