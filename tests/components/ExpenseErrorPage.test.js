import React from 'react'
import { shallow } from 'enzyme'
import ExpenseErrorPage from '../../src-cli/components/ExpenseErrorPage'

test('Should render ExpenseErrorPage correctly', () => {
    const wrapper = shallow(<ExpenseErrorPage />)

    expect(wrapper).toMatchSnapshot()
})