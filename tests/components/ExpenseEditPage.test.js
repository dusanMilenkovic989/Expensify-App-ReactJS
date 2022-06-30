import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseEditPage } from '../../src-cli/components/ExpenseEditPage'
import { expenses } from '../fixtures/expenses-and-filters'

let editExpense, removeExpense, params, navigate, wrapper

beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    params = { id: expenses[2].id }
    navigate = jest.fn()
    wrapper = shallow(
        <ExpenseEditPage 
            expenses={expenses}
            editExpense={editExpense}
            removeExpense={removeExpense}
            params={params}
            navigate={navigate}
        />
    )
})

test('Should render ExpenseEditPage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should dispatch editExpense and navigate', () => {
    wrapper.find('ExpenseForm').prop('onFormSubmit')(expenses[2])

    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
    expect(navigate).toHaveBeenLastCalledWith('/')
})

test('Should dispatch removeExpense and navigate', () => {
    wrapper.find('button').simulate('click')

    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[2].id })
    expect(navigate).toHaveBeenLastCalledWith('/')
})