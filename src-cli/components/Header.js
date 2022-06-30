import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../redux/actions/authentication'

export const Header = ({ logout }) => (
    <div className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>Expensify</h1>
                </Link>
                <button className="button button--link" onClick={logout}>Log out</button>
            </div>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({ logout: () => { dispatch(logout()) } })

export default connect(undefined, mapDispatchToProps)(Header)