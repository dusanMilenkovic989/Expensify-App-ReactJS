import React from 'react'
import { shallow } from 'enzyme'
import LoadingPage from '../../src-cli/components/LoadingPage'

test('Should render LoadingPage correctly', () => {
    const wrapper = shallow(<LoadingPage />)

    expect(wrapper).toMatchSnapshot()
})