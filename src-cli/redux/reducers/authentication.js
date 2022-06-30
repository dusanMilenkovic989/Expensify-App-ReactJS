const defaultAutenticationReducerState = {}

const autenticationReducer = (state = defaultAutenticationReducerState, action) => {
    switch (action.type) {
        case 'SET_USER_ID':
            return { id: action.id }
        case 'REMOVE_USER_ID':
            return {}
        default:
            return state
    }
}

export { autenticationReducer as default }