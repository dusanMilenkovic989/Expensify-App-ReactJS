import { setUserId, removeUserId } from '../../src-cli/redux/actions/authentication'

test('Should create object for set user id', () => {
    const id = '123abc!@#'

    expect(setUserId(id)).toEqual({ type: 'SET_USER_ID', id })
})

test('Should create object for remove user id', () => {
    expect(removeUserId()).toEqual({ type: 'REMOVE_USER_ID' })
})