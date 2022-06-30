import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseLoginPage } from "../../src-cli/components/ExpenseLoginPage"

test('Should render ExpenseLoginPage correctly', () => {
    const wrapper = shallow(<ExpenseLoginPage login={() => {}}/>)

    expect(wrapper).toMatchSnapshot()
})

test('Should dispatch login', () => {
    const login = jest.fn()
    const wrapper = shallow(<ExpenseLoginPage login={login}/>)
    wrapper.find('button').simulate('click')

    expect(login).toHaveBeenCalled()
})