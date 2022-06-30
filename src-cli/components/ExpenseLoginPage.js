import React from 'react'
import { connect } from 'react-redux' 
import { login } from '../redux/actions/authentication'

export const ExpenseLoginPage = ({ login }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>Log in to start tracking your expenses</p>
            <button className="button" onClick={login}>Log in with Google</button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({ login: () => { dispatch(login()) } })

export default connect(undefined, mapDispatchToProps)(ExpenseLoginPage)