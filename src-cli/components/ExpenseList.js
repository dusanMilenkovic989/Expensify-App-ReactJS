import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import VisibleExpenses from '../redux/selectors/expenses'

export const ExpenseList = ({ expenses }) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            {
                expenses.length > 0 ? (
                    expenses.map((expense) => ( 
                        <ExpenseListItem key={expense.id} expenseIndex={expenses.indexOf(expense) + 1} {...expense} />
                    ))
                ) : (
                    <div className="list-item list-item--message">
                        <span>No expenses yet</span>
                    </div>
                )
            }
        </div>
    </div>
)

const mapStateToProps = (state) => ({ expenses: VisibleExpenses(state.expenses, state.filters) })

export default connect(mapStateToProps)(ExpenseList)