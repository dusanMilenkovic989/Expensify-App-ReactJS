import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import AppRouter, { history } from './router/AppRouter'
import configureStore from './redux/store/configureStore'
import { getExpenses } from './redux/actions/expenses'
import { setUserId, removeUserId } from './redux/actions/authentication'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import { auth } from './firebase/database'
import LoadingPage from './components/LoadingPage'

ReactDOM.render(<LoadingPage />, document.getElementById('app'))

const store = configureStore()
const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false
const renderApp = () => {
    if (!hasRendered) ReactDOM.render(app, document.getElementById('app'))
    hasRendered = true
}

onAuthStateChanged(auth, async (user) => {
    if (user) {
        try {
            await store.dispatch(setUserId(user.uid))
            await store.dispatch(getExpenses())
            renderApp()
            
            if (history.location.pathname === '/') {
                history.push('/dashboard')
            }
        } catch (e) {}
    } else {
        try {
            await store.dispatch(removeUserId())
            renderApp()
            history.push('/')
        } catch (e) {}
    }
})