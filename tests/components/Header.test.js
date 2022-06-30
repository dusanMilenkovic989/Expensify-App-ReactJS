import React from 'React'
import { shallow } from 'enzyme'
import { Header } from '../../src-cli/components/Header'

test('Should render Header correctly', () => {
    const wrapper = shallow(<Header logout={() => {}}/>)
    
    expect(wrapper).toMatchSnapshot()
})

test('Should dispatch logout', () => {
    const logout = jest.fn()
    const wrapper = shallow(<Header logout={logout}/>)
    wrapper.find('button').simulate('click')
    
    expect(logout).toHaveBeenCalled()
})