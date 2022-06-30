import React from 'react'
import { shallow } from 'enzyme'
import ExpenseListItem from '../../src-cli/components/ExpenseListItem'
import { expenses } from '../fixtures/expenses-and-filters'

test('Should render ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)

    expect(wrapper).toMatchSnapshot()
})