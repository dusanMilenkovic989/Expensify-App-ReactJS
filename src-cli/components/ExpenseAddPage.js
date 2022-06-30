import React from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../redux/actions/expenses'

const withNavigateExpenseAddPage = (props) => {
    const navigate = useNavigate()

    return <ExpenseAddPage {...props} navigate={navigate} />
}

export const ExpenseAddPage = ({ addExpense, navigate }) => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Add Expense</h1>
            </div>
        </div>
        <div className="content-container">
            <ExpenseForm 
                onFormSubmit={(expense) => { 
                    addExpense(expense)
                    navigate('/')
                }}
            />
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({ addExpense: (expense) => { dispatch(addExpense(expense)) } })

export default connect(undefined, mapDispatchToProps)(withNavigateExpenseAddPage)