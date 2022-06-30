import React from 'react'
import ExpenseHeader from './ExpenseHeader'
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseList from './ExpenseList'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseHeader />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export { ExpenseDashboardPage as default }