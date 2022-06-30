import React from 'react'
import { shallow } from 'enzyme'
import ExpenseDashboardPage from '../../src-cli/components/ExpenseDashboardPage'

test('Should render ExpenseDashboardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />)

    expect(wrapper).toMatchSnapshot()
})