import authenticationReducer from '../../src-cli/redux/reducers/authentication'

test('Should set up default authenticated state when initialized', () => {
    expect(authenticationReducer(undefined, { type: '@@INIT' })).toEqual({})
})

test('Should set user id on state', () => {
    const id = '123abc'

    expect(authenticationReducer({}, { type: 'SET_USER_ID', id })).toEqual({ id })
})

test('Should remove user id from state', () => {
    expect(authenticationReducer({ id: '123abc' }, { type: 'REMOVE_USER_ID' })).toEqual({})
})