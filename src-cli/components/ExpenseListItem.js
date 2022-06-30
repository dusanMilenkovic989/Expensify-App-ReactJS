import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from '../utils/numeral'

const ExpenseListItem = ({ expenseIndex, id, description, amount, createdAt }) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{expenseIndex}. {description}</h3>
            <span className="list-item__subtitle">{moment(createdAt).format('Do MMMM, YYYY')}</span>
        </div>
        <h3 className="list-item__data">{numeral(amount / 100).format('0,0.00 $')} </h3>
    </Link>
)

export { ExpenseListItem as default }