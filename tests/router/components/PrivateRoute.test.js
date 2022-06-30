import React from 'react'
import { shallow } from 'enzyme'
import { PrivateRoute } from '../../../src-cli/router/components/PrivateRoute'
import ExpenseDashboardPage from '../../../src-cli/components/ExpenseDashboardPage'

test('Should render PrivateRoute correctly when user is authenticated', () => {
    const wrapper = shallow(<PrivateRoute child={<ExpenseDashboardPage />} isAuthenticated={true} />)

    expect(wrapper).toMatchSnapshot()
})

test('Should render PrivateRoute correctly when user is not authenticated', () => {
    const wrapper = shallow(<PrivateRoute child={<ExpenseDashboardPage />} isAuthenticated={false} />)

    expect(wrapper).toMatchSnapshot()
})