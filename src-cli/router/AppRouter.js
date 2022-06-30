import React from 'react'
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import ExpenseLoginPage from '../components/ExpenseLoginPage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import ExpenseAddPage from '../components/ExpenseAddPage'
import ExpenseEditPage from '../components/ExpenseEditPage'
import ExpenseErrorPage from '../components/ExpenseErrorPage'

const history = createBrowserHistory()

const AppRouter = () => (
    <HistoryRouter history={history}>
        <Routes>
            <Route path="/" element={<PublicRoute child={<ExpenseLoginPage />} />} />
            <Route path="dashboard" element={<PrivateRoute child={<ExpenseDashboardPage />} />} />
            <Route path="create" element={<PrivateRoute child={<ExpenseAddPage />} />} />
            <Route path="edit/:id" element={<PrivateRoute child={<ExpenseEditPage />} />} />
            <Route path="*" element={<ExpenseErrorPage />} />
        </Routes>
    </HistoryRouter>
)

export { history, AppRouter as default }