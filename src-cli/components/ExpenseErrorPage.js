import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseErrorPage = () => (
    <div>
        <p>404 Page</p>
        <Link to="/dashboard">Go home</Link>
    </div>
)

export { ExpenseErrorPage as default }