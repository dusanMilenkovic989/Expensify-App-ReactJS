import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseAddPage } from '../../src-cli/components/ExpenseAddPage'
import { expenses } from '../fixtures/expenses-and-filters'

let addExpense, navigate, wrapper

beforeEach(() => {
    addExpense = jest.fn()
    navigate = jest.fn()
    wrapper = shallow(<ExpenseAddPage addExpense={addExpense} navigate={navigate} />)
})

test('Should render ExpenseAddPage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should dispatch addExpense and navigate on form submit', () => {
    wrapper.find('ExpenseForm').prop('onFormSubmit')(expenses[0])

    expect(addExpense).toHaveBeenLastCalledWith(expenses[0])
    expect(navigate).toHaveBeenLastCalledWith('/')
})