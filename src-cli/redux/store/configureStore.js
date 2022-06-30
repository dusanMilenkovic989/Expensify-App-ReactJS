import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import authenticationReducer from '../reducers/authentication'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
    return createStore(
        combineReducers({ authenticated: authenticationReducer, expenses: expensesReducer, filters: filtersReducer }), 
        composeEnhancers(applyMiddleware(thunk))
    )
}

export { configureStore as default }