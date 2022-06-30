import React from 'react'
import { shallow } from 'enzyme'
import { PublicRoute } from '../../../src-cli/router/components/PublicRoute'
import { ExpenseLoginPage } from '../../../src-cli/components/ExpenseLoginPage'

test('Should render PublicRoute correctly when user is authenticated', () => {
    const wrapper = shallow(<PublicRoute child={<ExpenseLoginPage />} isAuthenticated={true} />)

    expect(wrapper).toMatchSnapshot()
})

test('Should render PublicRoute correctly when user is not authenticated', () => {
    const wrapper = shallow(<PublicRoute child={<ExpenseLoginPage />} isAuthenticated={false} />)

    expect(wrapper).toMatchSnapshot()
})