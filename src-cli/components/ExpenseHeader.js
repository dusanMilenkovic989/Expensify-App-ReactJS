import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import visibleExpenses from '../redux/selectors/expenses'
import summary from '../redux/selectors/summary'
import numeral from '../utils/numeral'

export const ExpenseHeader = ({ expenses }) => {
    const plural = expenses.length !== 1 ? 's' : ''
    const message = (
        <h1 className="page-header__title">
            Viewing <span>{expenses.length}</span> expense{plural}, totalling <span>{numeral(summary(expenses) / 100).format('0,0.00 $')}</span>
        </h1>
    )

    return (
        <div className="page-header">
            <div className="content-container">  
                {expenses.length > 0 && message}
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({ expenses: visibleExpenses(state.expenses, state.filters) })

export default connect(mapStateToProps)(ExpenseHeader)