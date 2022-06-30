import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { editExpense, removeExpense } from '../redux/actions/expenses'
import ExpenseForm from './ExpenseForm'

const withParAndNavExpenseEditPage = (props) => {
    const params = useParams()
    const navigate = useNavigate()

    return <ExpenseEditPage {...props} params={params} navigate={navigate} />
}

export const ExpenseEditPage = ({ expenses, editExpense, removeExpense, params, navigate }) => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Edit Expense</h1>
            </div>
        </div>
        <div className="content-container">
            <ExpenseForm 
                onFormSubmit={(expense) => { 
                    editExpense(params.id, expense)
                    navigate('/')
                }}
                expense={expenses.find((expense) => expense.id === params.id)}
            />
            <button
                className="button button--secondary"
                onClick={() => { 
                    removeExpense({ id: params.id })
                    navigate('/')
                }}
            >
                Remove expense
            </button>
        </div>
    </div>
)

const mapStateToProps = (state) => ({ expenses: state.expenses })

const mapDispatchToProps = (dispatch) => ({ 
    editExpense: (expenseId, expense) => { dispatch(editExpense(expenseId, expense)) },
    removeExpense: (data) => { dispatch(removeExpense(data)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(withParAndNavExpenseEditPage)