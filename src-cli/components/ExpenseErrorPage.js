import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const ExpenseErrorPage = () => (
    <div>
        <Header />
        <div className="page-header">
            <div className="content-container">  
                <h1 className="page-header__404">404</h1>
                <h1 className="page-header__title">Page Not Found</h1>
            </div>
        </div>
        <div className="content-container">
            <Link className="button button--home" to="/dashboard">Go home</Link>
        </div>
    </div>
)

export { ExpenseErrorPage as default }