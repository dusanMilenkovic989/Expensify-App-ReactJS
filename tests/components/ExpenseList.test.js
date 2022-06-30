import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseList } from '../../src-cli/components/ExpenseList'
import { expenses } from '../fixtures/expenses-and-filters'

test('Should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />)

    expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseList with message when no expenses are provided', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />)

    expect(wrapper).toMatchSnapshot()
})