import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import ExpenseForm from '../../src-cli/components/ExpenseForm'
import { expenses } from '../fixtures/expenses-and-filters'

test('Should render ExpenseForm correctly when no data is provided (Adding new expense)', () => {
    const wrapper = shallow(<ExpenseForm />)

    expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseForm correctly when data is provided (Editing existing expense)', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />)

    expect(wrapper).toMatchSnapshot()
})

test('Should render error message if form is not submitted with required fields', () => {
    const wrapper = shallow(<ExpenseForm />)

    expect(wrapper).toMatchSnapshot()

    wrapper.find('form').simulate('submit', { preventDefault: () => {} })

    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('Should change description on state when input changes', () => {
    const value = 'New description'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', { target: { value } })

    expect(wrapper.state('description')).toBe(value)
})

test('Should change note on state when textarea changes', () => {
    const value = 'New note'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change', { target: { value }})

    expect(wrapper.state('note')).toBe(value)
})

test('Should change amount on state when amount is changed correctly', () => {
    const value = '1200.00'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', { target: { value }})

    expect(wrapper.state('amount')).toBe(value)
})

test('Should not change amount on state when amount is changed incorrectly', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', { target: { value: 'Abc1200.000' }})

    expect(wrapper.state('amount')).toBe('')
})

test('Should call onFormSubmit prop if valid data is provided', () => {
    const spy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[2]} onFormSubmit={spy} />)
    wrapper.find('form').simulate('submit', { preventDefault: () => {} })

    expect(wrapper.state('error')).toBe('')
    expect(spy).toHaveBeenLastCalledWith({
        description: expenses[2].description,
        amount: expenses[2].amount,
        note: expenses[2].note,
        createdAt: expenses[2].createdAt
    })
})

test('Should change createdAt on state when date is changed', () => {
    const momentOfCreation = moment().add(20, 'days')
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onDateChange')(momentOfCreation)

    expect(wrapper.state('createdAt')).toEqual(momentOfCreation)
})

test('Should change calendarFocused on state when focus is changed', () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused })

    expect(wrapper.state('calendarFocused')).toBe(focused)
})