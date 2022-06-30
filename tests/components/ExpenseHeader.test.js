import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseHeader } from '../../src-cli/components/ExpenseHeader'
import { expenses } from '../fixtures/expenses-and-filters'

test('Should render ExpenseHeader correctly when multiple expenses are provided', () => {
    const wrapper = shallow(<ExpenseHeader expenses={expenses} />)

    expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseHeader correctly when single expense is provided', () => {
    const wrapper = shallow(<ExpenseHeader expenses={[expenses[0]]} />)

    expect(wrapper).toMatchSnapshot()
})

test('Should not render ExpenseHeader if no expenses are present', () => {
    const wrapper = shallow(<ExpenseHeader expenses={[]} />)

    expect(wrapper).toMatchSnapshot()
})